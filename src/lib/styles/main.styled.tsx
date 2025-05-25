import styled from 'styled-components';

const WrapperStyled = styled.div`
  width: 70%;

  @media (max-width: 1024px) {
    padding-right: 0;
    width: 100%;
  }
`;
const ContentStyled = styled.div`
    margin-top: 3rem;
`;

export { WrapperStyled, ContentStyled};
