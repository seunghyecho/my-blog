import React from 'react';
import Link from "next/link";
import styled, { css } from "styled-components";
import palette from "lib/styles/palette";

import { getUserInfo } from 'utils/auth';

const SubInfoBlock = styled.div<{ isMarginTop: boolean }>`
  padding: 1rem 0;
  border-top: 1px solid ${palette.gray[2]};
  ${(props) =>
    props.isMarginTop &&
    css`
      margin-top: 0.5rem;
    `}
  span {
    display: inline-block;
  }
  span + span:before {
    padding: 0 0.25rem;
    color: ${palette.gray[4]};
    content: '';
  }

  .account {
    background-color: ${palette.cyan[4]};
    color:white;
    padding: 0.2rem 0.4rem;
    border-radius: 8px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${palette.cyan[2]};
      transform: translateY(-1px);
    }
  }
`;

function SubInfo({ username, publishedDate, isMarginTop }) {
  const user = getUserInfo();
  return (
    <SubInfoBlock isMarginTop={isMarginTop}>
      <span>
        by&nbsp;
        <b>
          <Link href={`/${username || ""}`}>{username || ""}</Link>
        </b>
      </span>
      {user?.username === username && <b className="account">Me 🙋🏻‍♀️</b> }
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
}

export default SubInfo;
