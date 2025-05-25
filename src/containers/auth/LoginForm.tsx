import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { changeField, initializeForm, login } from 'modules/auth';

import * as authAPI from 'lib/api/auth';

import AuthForm from 'components/auth/AuthForm';

function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [auth, setAuth] = useState(null);
  const [error, setError] = useState(null);

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

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { username, password } = form;

    authAPI
      .login({ username, password })
      .then(res => {
        console.log('로그인 성공! 1');

        if (res.data.username)
          sessionStorage.setItem('username', res.data.username);

        setAuth(true);
      })
      .catch(err => {
        setError('로그인 실패!');
        return;
      });
  };

  useEffect(() => {
    if (auth) {
      console.log('로그인 성공! 2');
      authAPI.check().then(res => {
        router.push('/');
      });
    }
  }, [auth]);

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
