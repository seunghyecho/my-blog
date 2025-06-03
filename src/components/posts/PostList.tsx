import React from 'react';
import { useRouter } from 'next/router';
import {
  PostListBlock,
  PostNullItemBlock,
} from 'components/posts/PostList.styled';
import ListItem from "components/common/ListItem";

function PostList({ posts, loading, error }) {
  const router = useRouter();
  /**
   * 글쓰기 버튼 헤더로 이동 시킴
   */

  if (error) {
    return <PostNullItemBlock>오류 발생!</PostNullItemBlock>;
  }

  if(posts.length === 0 ){
    return  <PostNullItemBlock>등록된 글이 없습니다.</PostNullItemBlock>
  }

  const handleMoveDetailPage = (_id:string) => {
    if (!router.isReady) return;
    if (_id) {
      router.replace(`/posts`);
      window.localStorage.setItem('_id', _id);
    }
  };

  return (
    <>
      {!loading && posts && (
        <PostListBlock>
          {posts.map(post => (
            <ListItem post={post} key={post._id} handleMoveDetailPage={handleMoveDetailPage} />
          ))}
        </PostListBlock>
      )}
    </>
  );
}

export default PostList;
