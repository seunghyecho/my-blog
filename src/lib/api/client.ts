import axios from "axios";
import { getAuthToken, removeAuthToken } from "utils/auth";

const client = axios.create();
client.defaults.baseURL =
  process.env.NEXT_PUBLIC_API_URL || process.env.APP_USER_API_URL;
client.defaults.withCredentials = true; // Axios 설정에서 활성화
client.defaults.headers.common["Content-Type"] = "application/json";

// 요청 인터셉터: 토큰 자동 추가
client.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터: 토큰 만료 처리
client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 401 에러이고 재시도하지 않은 요청인 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // 토큰 삭제
      removeAuthToken();

      // 로그인 페이지로 리다이렉트
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

/*
  글로벌 설정 예시:

  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/'

  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

  // 인터셉터 설정
  axios.interceptors.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    },
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  )
*/

export default client;
