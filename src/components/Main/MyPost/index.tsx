import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Pagination from 'components/posts/Pagination';
import PostListContainer from 'containers/posts/PostListContainer';
import { fetchMyPosts } from 'lib/api/posts';

function MyPost() {
  const router = useRouter();
  const [page, setPage]= useState(
    router.query.page ? Number(router.query.page) : 1
  );

  // TODO 사용자 정보 체크
  const username = sessionStorage.getItem('username');

  const { data, isLoading, isError }= useQuery(['myPosts',page],() => fetchMyPosts({
      page,
      username:username||'',
      tag:''
  }));

  const posts = data?.data || '';
  const lastPage = data?.headers['last-page'];

  useEffect(()=>{
    router.replace({
      query:{
        page
      }
    })
  },[page]);

  return (
    <>
      <PostListContainer 
        posts={posts} 
        isLoading={isLoading} 
        isError={isError}
      />
     
      <Pagination
        page={page}
        setPage={setPage}
        lastPage={Number(lastPage)}
      />
    </>
  );
}

export default MyPost;
