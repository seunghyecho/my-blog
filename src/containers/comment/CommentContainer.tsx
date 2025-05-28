import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import styled from "styled-components";
import Button from "components/common/Button";
import palette from "lib/styles/palette";
import { fetchCreateComment, fetchReadComment } from "lib/api/comments";

const Wrapper = styled.div`
    width: 100%;
    margin-top: 4rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;

    h1{
        font-size: 1.125rem;
        line-height: 1.5;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    textarea{
        resize: none;
        padding: 1rem 1rem 1.5rem;
        outline: none;
        margin-bottom: 1.5rem;
        width: 100%;
        border-radius: 4px;
        min-height: 6.125rem;
        font-size: 1rem;
        border: 1px solid ${palette.gray[4]};
    }

    button{
        margin-left: auto;
        display: block;
    }

`;
const CommentBlock = styled.li`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    .user{
        margin: 0.5rem 0;

        span + span:before {
            padding: 0 0.25rem;
            color: ${palette.gray[4]};
            content: '';
        }

        b{
            color: ${palette.gray[8]};
            font-size: 1rem;
        }
    }

    .comment{
        font-size: 1.125rem;
        line-height: 1.7;
        letter-spacing: -0.004em;
        word-break: keep-all;
        overflow-wrap: break-word;
    }
`;

function CommentContainer({ postId }: { postId: string }) {
  const [value, setValue] = useState("");

  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery(["comments"], () => fetchReadComment(postId));

  const createMutation = useMutation(fetchCreateComment);

  const nextId = useRef(3);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createMutation.mutate({ postId, content: value });

    setValue("");
    nextId.current += 1;
  };
  return (
    <Wrapper>
      <h1>{comments?.data?.length}개의 댓글</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          id="comment"
          value={value}
          onChange={handleChange}
          cols={30}
          rows={4}
          placeholder="댓글을 작성하세요."
        />
        <Button type="submit" label="댓글 작성" cyan />
      </form>
      <ul>
        {comments?.data?.map((c: any) => {
          return (
            <CommentBlock key={c.id}>
              <div className="user">
                <span>
                  <Link href="/">
                    <b>{c.user.username}</b>
                  </Link>
                </span>
                <span>{c.createdAt}</span>
              </div>
              <div className="comment">
                <p>{c.content}</p>
              </div>
            </CommentBlock>
          );
        })}
      </ul>
    </Wrapper>
  );
}

export default CommentContainer;
