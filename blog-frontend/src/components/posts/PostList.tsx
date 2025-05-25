import React from 'react';
import { useRouter } from 'next/router';
import Tags from 'components/common/Tags';
import SubInfo from 'components/common/SubInfo';
import { PostListBlock, PostItemBlock, PostItemContent } from 'components/posts/PostList.styled';
import { postT } from 'types/post';

function ListItem({ post }) {
  const router = useRouter();
  const { title, body, user, publishedDate, tags, _id }: postT = post;

  const handleMoveDetailPage = ()=>{
    if (!router.isReady) return;
    if (_id) {
      router.replace(`/posts`);
      window.localStorage.setItem('_id', _id);
    }
  }
  
  return (
    <PostItemBlock>
      <h1>
        <div onClick={handleMoveDetailPage}>{title}</div>
      </h1>
      <Tags tags={tags} />
      <PostItemContent dangerouslySetInnerHTML={{ __html: body }} />
      <SubInfo
        isMarginTop
        username={user?.username}
        publishedDate={new Date(publishedDate)}
      />
    </PostItemBlock>
  );
}

function PostList({ posts, loading, error }) {
  /**
   * 글쓰기 버튼 헤더로 이동 시킴
   */

  if (error) {
    return <PostItemBlock>오류 발생!</PostItemBlock>;
  }
  
  return (
      <>
        {!loading && posts && (
          <PostListBlock>
            {posts.map(post => (
              <ListItem post={post} key={post._id} />
            ))}
          </PostListBlock>
        )}
      </>
  );
}

export default PostList;
