import React, { useEffect, useState } from "react";
import { signIn } from 'next-auth/react';
// import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
// import { changeField, initializeForm } from 'modules/auth';
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as authAPI from "pages/api/auth";
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

  const handleLogin = async (e: React.FormEvent) =>{
    e.preventDefault();
    const { username, password } = loginForm;
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
      callbackUrl: "/"
    });
    if (result?.ok) {
      router.push(result.url); // callbackUrl 설정 후 리다이렉트
    } else {
      setError('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    // React Query로 폼 상태 관리
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password } = loginForm;

    // 폼 유효성 검사
    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 로그인 뮤테이션 실행
    handleLogin(e);
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

  const  isLoading = false;

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
