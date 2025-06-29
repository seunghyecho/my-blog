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
  loading?: boolean;
  children?:React.ReactNode;
}

const StyledButton = styled.button<{ fullWidth?: boolean; cyan?: boolean; loading?: boolean }>`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${palette.gray[0]};
  color: ${palette.gray[0]};
  font-size: 1.125rem;
  box-sizing: border-box;
  background: ${palette.gray[8]};
  position: relative;

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
    transform: none;
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

  ${props =>
    props.loading &&
    css`
      color: transparent;
      
      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        margin-left: -8px;
        margin-top: -8px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}
`;

function Button({ type, label, className, onClick, children, loading, ...props }: ButtonProp) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={className}
      loading={loading}
      disabled={loading || props.disabled}
      {...props}
    >
      {label || children}
    </StyledButton>
  );
}

export default Button;
