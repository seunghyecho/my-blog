import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import ThemeToggle from "components/common/ThemeToggle";
import HeaderUtils from "components/common/HeaderUtils";
import Responsive from "components/common/Responsive";
import MetaTag from "components/common/MetaTag";

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
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (status === "authenticated" && session?.user?.username) {
      setUsername(session.user.username); // ✅ 세션에서 username 가져오기
    } else if (status === "unauthenticated") {
      setUsername(""); // 세션 만료 시 초기화
    }
  }, [status, session]);

  return (
    <>
      <MetaTag />

      <HeaderBlock>
        <Wrapper>
          <ThemeToggle toggle={toggleDarkMode} mode={isDarkMode} />

          <Link href="/" className="title">
            {`@${username}`} Blog
          </Link>
          <HeaderUtils user={username} />
        </Wrapper>
        <Spacer />
      </HeaderBlock>
    </>
  );
}

export default Header;
