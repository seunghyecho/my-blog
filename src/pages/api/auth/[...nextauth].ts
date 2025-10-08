import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          console.log('NextAuth authorize called with:', credentials?.username);
          
          // 기존 서버 API와 연동
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          })
          
          const user = await res.json()
          console.log('Server response:', user);
          
          if (res.ok && user && user.token) {
            // 서버 응답 형식에 맞게 반환
            return {
              id: user._id || user.id,
              username: user.username,
              email: user.email || user.username,
              token: user.token,
            }
          }
          
          console.log('Authorization failed:', res.status, user);
          // return null
        } catch (error) {
          console.error('NextAuth authorize error:', error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }:{token:any, user:any}) {
      console.log('JWT callback - token:', token, 'user:', user);
      
      // 첫 로그인 시 사용자 정보 저장
      if (user) {
        token.accessToken = user.token
        token.user = {
          id: user.id,
          username: user.username,
          email: user.email,
          token: user.token
        }
        console.log('JWT token updated with:', { accessToken: user.token, user: token.user });
      }
      
      return token
    },
    async session({ session, token }:{session:any, token:any}) {
      console.log('Session callback - session:', session, 'token:', token);
      
      // 세션에 사용자 정보와 토큰 포함
      if (token.accessToken) {
        session.accessToken = token.accessToken
      }
      
      if (token.user) {
        session.user = token.user
      }
      
      console.log('Session updated with:', { accessToken: session.accessToken, user: session.user });
      return session
    },
  },
  pages: {
    signIn: '/login', // 커스텀 로그인 페이지
  },
  session: {
    strategy: 'jwt', // JWT 전략 사용 (기존 토큰 방식과 호환)
    maxAge: 60 * 60, // 1시간 (기존과 동일)
  },
  jwt: {
    maxAge: 60 * 60, // 1시간
  },
  debug: true, // 디버그 모드 활성화
}

export default NextAuth(authOptions)