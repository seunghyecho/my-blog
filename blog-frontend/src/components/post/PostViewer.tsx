import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import Tags from 'components/common/Tags';
import SubInfo from 'components/common/SubInfo';

const PostViewerContent = styled.div`
  margin: 2rem 0 0;
  min-height: 150px;
`;

const Wrapper = styled.div`
  margin-top: 4rem;

  h1{
    font-size: 2.75rem;
    font-weight: bold;;
  }
`;

function PostViewer ({ post, error, loading, actionButtons }) {
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
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Wrapper>
        <h1>{title}</h1>
        <SubInfo
          username={user?.username}
          publishedDate={publishedDate}
          isMarginTop
        />
        <Tags tags={tags} />
        <PostViewerContent dangerouslySetInnerHTML={{ __html: body }} />
        {actionButtons}
      </Wrapper>
    </>
  );
};

export default PostViewer;

