import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  margin: 0 auto;
  width: 1024px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
  }
`;

interface Props {
  children: React.ReactNode;
}

function Responsive({ children, ...rest }: Props) {
  return (
    <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
  );
}

export default Responsive;