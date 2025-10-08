import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { fetchTags } from "pages/api/tags";
import { useQuery } from '@tanstack/react-query';

const TagsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
`;
const TagItem = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  font-size: 0.9rem;
  color: #495057;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e9ecef;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '#';
    color: #868e96;
    margin-right: 0.25rem;
  }
`;

interface Tags {
    data:string[];
}

export default function Tags() {
    const router = useRouter();
    const {data:tags, isLoading} = useQuery<Tags>(['tags'], fetchTags)
    const handleTagClick = (tag:string)=>{
        router.push({
            pathname:'/tag',
            query: { tag }
        });
    }
  return (
  <TagsBlock>
    {!isLoading && tags?.data.map((tag:string , index:number)=>{
        return <TagItem key={index} onClick={()=>handleTagClick(tag)}>{tag}</TagItem>
        })}
    </TagsBlock>
);
}
