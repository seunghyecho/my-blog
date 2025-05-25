import styled from 'styled-components';
import palette from 'lib/styles/palette';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0 0 1rem;
    color: ${palette.gray[8]};
    text-align: center;
  }

  p {
    margin-top: 10px;
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: '⚠ ';
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    font-weight: 200;
  }

  form > * {
    margin: 20px auto;
  }
`;

const StyledInput = styled.input`
  padding: 0.5rem 0;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  font-size: 1rem;
  outline: none;
  background-color: transparent;

  &:focus {
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }

  &[type='button'],
  &[type='submit'] {
    border: none;
    background-color: #619ffb;
    color: #ffffff;
  }

  &[type='submit']:hover {
    background: #253752;
  }

  &[type='button']:active,
  &[type='submit']:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.4;
    color: #619ffb;
  }

  &[type='button']:hover {
    transition: 0.3s all;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;

  a {
    color: ${palette.gray[6]};

    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ErrorMessage = styled.div`
  color: palevioletred;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

export { AuthFormBlock, StyledInput, Footer, ErrorMessage };
