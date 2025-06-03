import styled from 'styled-components';
import Link from 'next/link';
import palette from 'lib/styles/palette';

const AuthTemplateBlock = styled.div`
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100vh;
`;

const WhiteBox = styled.div`
  padding: 2rem;
  width: 300px;
  min-width: 300px;
  border-radius: 3px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  background-color: ${palette.gray[0]};
  text-align: center;

  .top {
    padding-bottom: 2rem;
    display: block;

    a {
      font-weight: 800;
      letter-spacing: 0.2rem;
      color: #202124;
    }
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="top">
          <Link href="/">BLOG</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};
export default AuthTemplate;
