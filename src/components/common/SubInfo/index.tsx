import Link from 'next/link';
import styled, { css } from 'styled-components';
import palette from 'lib/styles/palette';

const SubInfoBlock = styled.div<{ isMarginTop: boolean }>`
  padding: 1rem 0;
  color: ${palette.gray[6]};
  border-top: 1px solid ${palette.gray[2]};

  ${props =>
    props.isMarginTop &&
    css`
      margin-top: 1rem;
    `}

  span + span:before {
    padding: 0 0.25rem;
    color: ${palette.gray[4]};
    content: '\\B7';
  }

  b{
    color: ${palette.gray[8]};
  }
`;

function SubInfo({ username, publishedDate, isMarginTop }) {
  return (
    <SubInfoBlock isMarginTop={isMarginTop}>
      <span>by&nbsp;
        <b> 
          <Link href={`/${username || ''}`}>
             { username || ''}
          </Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
}

export default SubInfo;
