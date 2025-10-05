import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
// import { changeField, initializeForm } from 'modules/auth';
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as authAPI from "lib/api/auth";
import AuthForm from "components/auth/AuthForm";
import { setAuthToken, setUserInfo } from "utils/auth";

function LoginForm() {
  const router = useRouter();
  // const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [error, setError] = useState(null);

  // 로그인 폼 상태를 React Query로 관리
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  // 로그인 뮤테이션
  const loginMutation = useMutation({
    mutationFn: authAPI.login,
    onSuccess: (res) => {
      console.log("로그인 성공!", res.data);

      // 토큰 저장 (새로운 유틸리티 함수 사용)
      setAuthToken(res.data.token, 3600); // 1시간 만료

      // 사용자 정보 저장
      setUserInfo({
        id: res.data._id,
        username: res.data.username,
      });

      // React Query 캐시에 사용자 정보 저장
      queryClient.setQueryData(["user"], res.data);

      // 로그인 성공 후 메인 페이지로 이동
      router.push("/");
    },
    onError: (err) => {
      console.error("로그인 에러:", err);
      setError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    },
  });

  // Redux 상태 관리 코드 주석처리
  /*
  const { form, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));
  */

  const onChange = (e) => {
    const { value, name } = e.target;

    // React Query로 폼 상태 관리
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Redux 액션 주석처리
    /*
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    );
    */
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = loginForm;

    // 폼 유효성 검사
    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 로그인 뮤테이션 실행
    loginMutation.mutate({ username, password });
  };

  // 컴포넌트 마운트 시 폼 초기화 (Redux 대신 React Query로)
  useEffect(() => {
    setLoginForm({
      username: "",
      password: "",
    });
    setError(null);

    // Redux 폼 초기화 주석처리
    // dispatch(initializeForm('login'));
  }, []);

  // 로딩 상태 처리
  const isLoading = loginMutation.isLoading;

  return (
    <AuthForm
      type="login"
      form={loginForm} // Redux form 대신 React Query state 사용
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={isLoading}
    />
  );
}

export default LoginForm;
