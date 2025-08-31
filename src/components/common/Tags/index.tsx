import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const TagItem = styled.div`
  height: 2rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  a {
    padding: 0.4rem 0.8rem;

    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    color: #22b8cf;
    border-radius: 1rem;

    &:hover {
      color: #ffffff;
      background-color: #009cb4;
      transform: translateY(-1px);
    }
  }
`;

function Tags({ tags }) {
  return (
    <Wrapper>
      {tags.map((t: any) => (
        <TagItem key={t}>
          <Link href={`/?tag=${t}`}>#{t}</Link>
        </TagItem>
      ))}
    </Wrapper>
  );
}

export default Tags;
