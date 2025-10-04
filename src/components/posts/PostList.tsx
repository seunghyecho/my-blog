import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PostListBlock,
  PostWrapper,
  PostNullItemBlock,
} from "components/posts/PostList.styled";
import ListItem from "components/common/ListItem";

function PostList({ posts, loading, error }) {
  const router = useRouter();
  if (error) {
    return <PostNullItemBlock>오류 발생!</PostNullItemBlock>;
  }

  if (posts.length === 0) {
    return <PostNullItemBlock>등록된 글이 없습니다.</PostNullItemBlock>;
  }

  const handleMoveDetailPage = (_id: string) => {
    if (!router.isReady) return;
    if (_id) {
      router.replace(`/posts`);
      window.localStorage.setItem("_id", _id);
    }
  };

  return (
    <>
      {!loading && posts && (
        <PostListBlock>
          {posts.map((post: any) => (
            <PostWrapper key={post._id}>
              <Link href={`/posts?_id=${post._id}`}>
                <ListItem
                  post={post}
                  key={post._id}
                  handleMoveDetailPage={handleMoveDetailPage}
                />
              </Link>
            </PostWrapper>
          ))}
        </PostListBlock>
      )}
    </>
  );
}

export default PostList;
