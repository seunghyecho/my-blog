import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { changeField, initializeForm, login } from 'modules/auth';
import * as authAPI from 'lib/api/auth';
import AuthForm from 'components/auth/AuthForm';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { me } from 'lib/api/users';

function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [auth, setAuth] = useState(null);
  const [error, setError] = useState(null);

  // 사용자 정보 조회 쿼리
  const { data: userData, refetch: refetchUser } = useQuery(
    ['user'],
    () => me(),
    {
      enabled: false, // 초기에는 비활성화
      retry: false,
      onSuccess: (data) => {
        console.log('사용자 정보 조회 성공:', data);
        // 사용자 정보를 Redux store에 저장
        // dispatch(login(data));
      },
      onError: (error) => {
        console.error('사용자 정보 조회 실패:', error);
        setError('사용자 정보 조회에 실패했습니다.');
      }
    }
  );

  const { form, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    );
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { username, password } = form;

    try {
      // 로그인 API 호출
      const res = await authAPI.login({ username, password });
      console.log('로그인 성공!');

      if (res.data.username) {
        // TODO
        sessionStorage.setItem('username', res.data.username);
        sessionStorage.setItem('userId', res.data._id);
        // 토큰 저장
        sessionStorage.setItem('token', res.data.token);
        setAuth(true);
      }
    } catch (err) {
      setError('로그인 실패!');
      console.error('로그인 에러:', err);
    }
  };

  useEffect(() => {
    if (auth) {
      console.log('로그인 성공! 사용자 정보 조회 시작');
      // 로그인 성공 후 사용자 정보 조회
      refetchUser();
    }
  }, [auth, refetchUser]);

  // 사용자 정보 조회 성공 시 메인 페이지로 이동
  useEffect(() => {
    if (userData) {
      console.log('사용자 정보 조회 완료, 메인 페이지로 이동');
      authAPI.check().then(res => {
        console.log('인증 성공 로그:', res)
        router.push('/');
      });
    }
  }, [userData, router]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
}

export default LoginForm;
