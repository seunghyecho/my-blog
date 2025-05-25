import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import AuthForm from 'components/auth/AuthForm';
import { changeField, initializeForm, register } from 'modules/auth';
import { check } from 'modules/user';

function RegisterForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    // 하나라도 비어 있을 경우
    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    // 비밀번호가 일치하지 않을 경우
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' })
      );
      return;
    }
    console.log(register({ username, password }), '------------');

    dispatch(register({ username, password }));
  };

  // 컴포넌트 처음 렌더링 시 form 초기화
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공, 실패 처리
  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      // 계정이 이미 존재할 경우
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      // 기타
      console.log('회원가입 실패!');
      return;
    }
    if (auth) {
      console.log('회원가입 성공!');
      console.log(auth);
      // dispatch(check()); //회원가입 성공 후 check 호출해 현재 사용자가 로그인 상태인지 확인함.
      return;
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
      router.push('/');
      try {
        window.localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('register, localStorage is not working');
      }
    }
  }, [router, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
}
export default RegisterForm;
