import Link from 'next/link';
import styled from 'styled-components';
import ThemeToggle from 'components/common/ThemeToggle';
import HeaderUtils from 'components/common/HeaderUtils';
import Responsive from 'components/common/Responsive';
import { getUserInfo } from 'utils/auth';

const HeaderBlock = styled.header`
  height: 6rem;
  line-height: 6rem;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.03);

  .title {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
`;

const Wrapper = styled(Responsive)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Spacer = styled.div`
  height: 6rem;
`;

function Header({ isDarkMode, toggleDarkMode }) {
  const user = getUserInfo();

  return (
    <HeaderBlock>
      <Wrapper>
        <ThemeToggle toggle={toggleDarkMode} mode={isDarkMode} />

        <Link href="/" className="title">
          {user?.username ? `@${user?.username}` : '@'} Blog
        </Link>
        <HeaderUtils user={user?.username} />
      </Wrapper>
      <Spacer />
    </HeaderBlock>
  );
}

export default Header;
