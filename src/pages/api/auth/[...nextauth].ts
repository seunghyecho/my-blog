import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // 받은 credentials 정보 전체 로그
          console.log("NextAuth authorize - Received credentials:", {
            username: credentials?.username,
            password: credentials?.password ? "***" : undefined,
          });

          // 기존 서버 API와 연동
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                username: credentials?.username,
                password: credentials?.password,
              }),
            }
          );

          const user = await res.json();
          console.log("Backend server response:", {
            status: res.status,
            ok: res.ok,
            user: user,
          });

          if (res.ok && user) {
            // 백엔드 서버가 반환하는 토큰 필드 확인
            // access_token, accessToken, token 등 다양한 형태 지원
            const accessToken = 
              user.access_token || 
              user.accessToken || 
              user.token ||
              user.data?.access_token ||
              user.data?.token;

            if (accessToken) {
              // 서버 응답 형식에 맞게 반환
              const userInfo = {
                id: user._id || user.id || user.userId,
                username: user.username || user.name,
                email: user.email || user.username,
                token: accessToken,
              };

              console.log("User authorized successfully:", {
                id: userInfo.id,
                username: userInfo.username,
                email: userInfo.email,
                hasToken: !!userInfo.token,
              });

              return userInfo;
            } else {
              console.warn("No access token found in server response:", user);
            }
          }

          console.error("Authorization failed:", {
            status: res.status,
            response: user,
          });
          return null;
        } catch (error) {
          console.error("NextAuth authorize error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      // 첫 로그인 시 사용자 정보 저장
      if (user) {
        console.log("JWT callback - First login, storing user info:", {
          userId: user.id,
          username: user.username,
          email: user.email,
          hasToken: !!user.token,
        });

        token.accessToken = user.token;
        token.user = {
          id: user.id,
          username: user.username,
          email: user.email,
          token: user.token,
        };

        console.log("JWT token updated with user data:", {
          accessToken: token.accessToken ? "Present" : "Missing",
          user: token.user,
        });
      } else {
        console.log("JWT callback - Token refresh, user data already stored");
      }

      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // 세션에 사용자 정보와 토큰 포함
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }

      if (token.user) {
        session.user = token.user;
      }

      console.log("Session callback - Final session data:", {
        accessToken: session.accessToken ? "Present" : "Missing",
        user: session.user ? {
          id: session.user.id,
          username: session.user.username,
          email: session.user.email,
        } : "Missing",
      });

      return session;
    },
  },
  pages: {
    signIn: "/login", // 커스텀 로그인 페이지
  },
  session: {
    strategy: "jwt", // JWT 전략 사용 (기존 토큰 방식과 호환)
    maxAge: 60 * 60, // 1시간 (기존과 동일)
  },
  jwt: {
    // NextAuth v4는 기본적으로 JWT를 암호화하지 않고 서명만 합니다
    // 암호화를 비활성화하려면 encryptionKey 환경 변수를 설정하지 않으면 됩니다
    maxAge: 60 * 60, // 1시간
  },
  debug: true, // 디버그 모드 활성화
};

export default NextAuth(authOptions);
