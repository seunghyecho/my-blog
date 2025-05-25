import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import Pagination from 'components/posts/Pagination';
import PostListContainer from 'containers/posts/PostListContainer';
import { fetchPosts } from 'lib/api/posts';


function Post() {
  const router = useRouter();
  const [page, setPage]= useState(
    router.query.page ? Number(router.query.page) : 1
  );

  const { data, isLoading, isError }= useQuery(['posts',page],() => fetchPosts({
      page,
      username:'',
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

export default Post;
