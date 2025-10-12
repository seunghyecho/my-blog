import React from "react";
import styled from "styled-components";
import MetaTag from "components/common/MetaTag";
import Tags from "components/common/Tags";
import SubInfo from "components/common/SubInfo";

const PostViewerContent = styled.div`
  margin: 2rem 0;
  min-height: 150px;
  height: 100%;
  padding: 2rem 0;
  border-radius: 12px;
  line-height: 1.8;
  font-size: 1.1rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 4rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

    h1 {
      font-size: 2rem;
    }
`;

const ActionButtonsWrapper = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #eaeaea;
`;

function PostViewer({ post, error, loading, actionButtons }) {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <>존재하지 않는 포스트입니다.</>;
    }
    return <>오류 발생!</>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;
  return (
    <>
      <MetaTag />

      <Wrapper>
        <h1>{title}</h1>
        <SubInfo
          username={user?.username}
          publishedDate={publishedDate}
          isMarginTop
        />
        <PostViewerContent dangerouslySetInnerHTML={{ __html: body }} />
        <Tags tags={tags} />
        <ActionButtonsWrapper>{actionButtons}</ActionButtonsWrapper>
      </Wrapper>
    </>
  );
}

export default PostViewer;
