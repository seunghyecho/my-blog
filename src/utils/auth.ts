// 인증 관련 유틸리티 함수

// 토큰 저장 (SessionStorage 사용)
export const setAuthToken = (token: string, expiresIn?: number) => {
  sessionStorage.setItem('accessToken', token);
  
  if (expiresIn) {
    const expiresAt = Date.now() + expiresIn * 1000;
    sessionStorage.setItem('expiresAt', expiresAt.toString());
  }
};

// 토큰 가져오기
export const getAuthToken = (): string | null => {
  return sessionStorage.getItem('accessToken');
};

// 토큰 유효성 확인
export const isTokenValid = (): boolean => {
  const expiresAt = sessionStorage.getItem('expiresAt');
  if (!expiresAt) return true; // 만료 시간이 없으면 유효하다고 간주
  
  return Date.now() < parseInt(expiresAt);
};

// 토큰 삭제
export const removeAuthToken = () => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('expiresAt');
};

// 사용자 정보 저장 (LocalStorage 사용)
export const setUserInfo = (user: any) => {
  localStorage.setItem('user', JSON.stringify(user));
};

// 사용자 정보 가져오기
export const getUserInfo = (): any => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// 사용자 정보 삭제
export const removeUserInfo = () => {
  localStorage.removeItem('user');
};

// 전체 인증 정보 삭제 (로그아웃)
export const clearAuth = () => {
  removeAuthToken();
  removeUserInfo();
};

// 로그인 상태 확인
export const isAuthenticated = (): boolean => {
  return !!(getAuthToken() && isTokenValid() && getUserInfo());
}; 