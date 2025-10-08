import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Pagination from 'components/posts/Pagination';
import PostListContainer from 'containers/posts/PostListContainer';
import { fetchMyPosts } from 'pages/api/posts';

import { getUserInfo } from 'utils/auth';
import { useSession } from 'next-auth/react';

function MyPost() {
  const router = useRouter();

  const [page, setPage]= useState(
    router.query.page ? Number(router.query.page) : 1
  );

 
  const { data: session, status } = useSession();
  const user = session?.user;

  const { data, isLoading, isError }= useQuery(['myPosts',page],() => fetchMyPosts({
      page,
      username: user?.username || '',
      tag:''
  }));

  const posts = data?.data || '';
  const lastPage = Number(data?.headers['last-page']);

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
        lastPage={lastPage}
      />
    </>
  );
}

export default MyPost;
