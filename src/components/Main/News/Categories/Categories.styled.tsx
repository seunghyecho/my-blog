import styled, { css } from 'styled-components';

const Layout = styled.ul`
  display: flex;

  @media screen and(max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.li<{ active: boolean; }>`
  margin: 0 1rem;
  position: relative;
  height: 3rem;
  line-height: 3rem;
  cursor: pointer;
  white-space: pre;
  box-sizing: border-box;

  &:hover {
    color: #619ffb;
  }

  ${props => props.active && css`
    color: #619ffb;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #619ffb;
    }
  `}
`;

export { Layout, Category };