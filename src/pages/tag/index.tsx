import Link from "next/link";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import styled from "styled-components";

import palette from "lib/styles/palette";
import { fetchPostsByTag } from "pages/api/tags";
import ListItem from "components/common/ListItem";
import Pagination from "components/posts/Pagination";

const TagPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const TagHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const TagTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  
  &::before {
    content: '#';
    color: ${palette.cyan[5]};
    margin-right: 0.5rem;
  }
`;

const TagDescription = styled.p`
  color: ${palette.gray[6]};
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const PostList = styled.div`
  display: grid;
  gap: 2rem;
`;

export default function Tags() {
  const router = useRouter();

  const tag = (router.query.tag as string) || "";

  const [page, setPage] = useState(
    router.query.page ? Number(router.query.page) : 1
  );

  const { data: tags, isLoading } = useQuery(["tags", page], () =>
    fetchPostsByTag({
      tag: (router.query.tag as string) || "",
      page,
    })
  );

  const lastPage = Number(tags?.headers["last-page"]);

  return (
    <>
      <TagPageContainer>
        <TagHeader>
          <TagTitle>{tag}</TagTitle>
          <TagDescription>
            {tag} 태그와 관련된 {tags?.data.length}개의 게시물을 확인하세요.
          </TagDescription>
        </TagHeader>
        <PostList>
          {!isLoading &&
            tags?.data?.map((tag: any) => (
              <Link href={`/posts?_id=${tag._id}`} key={tag._id}>
                <ListItem post={tag} />
              </Link>
            ))}
        </PostList>
      </TagPageContainer>
      <Pagination page={page} setPage={setPage} lastPage={lastPage} />
    </>
  );
}
