import React from 'react';
import Link from 'next/link';
import Button from 'components/common/Button';
import {
  AuthFormBlock,
  Footer,
  StyledInput,
  ErrorMessage
} from 'components/auth/AuthForm.styled';

interface Props {
  type: string;
  form: any;
  onChange: React.ChangeEventHandler;
  onSubmit: React.EventHandler<any>;
  error: string;
}

const textMap = {
  login: '로그인',
  register: '회원가입',
  accounts: '회원정보'
};

function AuthForm({ type, form, onChange, onSubmit, error }: Props) {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChange}
          value={form.password}
        />

        {type === 'register' && (
          <StyledInput
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button fullWidth cyan type="submit" label={text} />
      </form>

      <Footer>
        {type === 'login' ? (
          <Link href="/register">회원가입</Link>
        ) : (
          <Link href="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
}

export default AuthForm;
