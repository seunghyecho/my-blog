import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const TagItem = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-1px);
  }

  a {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    
    &:hover {
      color: #333;
    }
  }
`;

function Tags({ tags }) {
  return (
    <Wrapper>
      {tags.map(t => (
        <TagItem key={t}>
          <Link href={`/?tag=${t}`}>#{t}</Link>
        </TagItem>
      ))}
    </Wrapper>
  );
}

export default Tags;
