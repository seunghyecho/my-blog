// types/next-auth.d.ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email?: string;
      // 필요 시 추가 필드
    };
    accessToken?: string;
  }
}
