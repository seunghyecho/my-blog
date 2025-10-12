import React, { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import AuthForm from "components/auth/AuthForm";
import { register } from "pages/api/auth";
import { CustomError } from "types/error";

function RegisterForm() {
  const router = useRouter();

  const [error, setError] = useState<string>(null);

  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleRegister = useMutation(register, {
    onSuccess: (data, variables, context) => {
      console.log("회원가입 성공!");
      console.log("회원가입 성공 : data ", data);
      console.log("회원가입 성공 : variables ", variables); // {"username": "username","password": "password"}

      router.push("/login");
    },
    onError: (error, variables, context) => {
      console.log("회원가입 실패 : variables ", variables);
      console.log("회원가입 실패 : context ", context);

      const customErr = error as CustomError;
      if (customErr.response.status === 409) {
        setError("이미 존재하는 계정입니다.");
        return;
      }
      if (customErr.response.status === 400) {
        setError("회원가입에 실패했습니다.");
        return;
      }
      if (customErr.response.status === 500) {
        console.error("Register API error:", error);
      }
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = registerForm;

    // 하나라도 비어 있을 경우
    if ([username, password, passwordConfirm].includes("")) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }

    // 비밀번호가 일치하지 않을 경우
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // React Query mutate 호출
    handleRegister.mutate({ username, password });
  };

  return (
    <AuthForm
      type="register"
      form={registerForm}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
}
export default RegisterForm;
