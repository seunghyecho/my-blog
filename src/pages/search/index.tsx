import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive';
import SearchBar from 'components/common/SearchBar';
import PostList from 'components/posts/PostList';
import { fetchPosts } from 'lib/api/posts';

const SearchBlock = styled(Responsive)`
  padding-bottom: 10rem;

  p{
    margin: 1.5rem 0;
  }
`;

function Search() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  
  // TODO page를 전체로
  const [params, ]= useState({
    page:1,
    username:'',
    tag:'',
  })

  const {data, isLoading, isError} = useQuery(['posts'],() => fetchPosts({
    ...params,
  }));

   const filteredData = (data, query) => {
    if(!query) {
      data = [];
    }

    query = query.toLowerCase();

    return data?.filter(item =>
      item.title.split(' ').some(word =>
        word.toLowerCase().includes(query)
      )
    );
  }

  const results = filteredData(data?.data, query);

  const handleChange = (e)=>{
    setQuery(e.target.value);
  };

  useEffect(()=>{
    router.replace({
      query:{
        ...params
      }
    })
  },[]);

  return (
    <SearchBlock>
      <SearchBar
        query={query}
        onChange={handleChange}
      />
      
      <p>총 <strong>{results.length}</strong>개의 포스트를 찾았습니다.</p>

      <PostList
        loading={isLoading}
        error={isError}
        posts={results}
      />
    </SearchBlock>
  );
}
export default Search;
