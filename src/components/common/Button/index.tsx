import React from 'react';
import styled, { css } from 'styled-components';
import palette from 'lib/styles/palette';

interface ButtonProp {
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  cyan?: boolean;
  disabled?: boolean;
  children?:React.ReactNode;
}

const StyledButton = styled.button<{ fullWidth?: boolean; cyan?: boolean }>`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${palette.gray[0]};
  color: ${palette.gray[0]};
  font-size: 1.125rem;
  box-sizing: border-box;
  background: ${palette.gray[8]};

  &:hover {
    background: ${palette.gray[6]};
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.gray[5]};
    cursor: not-allowed;
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${props =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};

      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

function Button({ type, label, className, onClick, children, ...props }: ButtonProp) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={className}
      {...props}
    >
      {label || children}
    </StyledButton>
  );
}

export default Button;
