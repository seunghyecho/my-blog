import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import styled from "styled-components";
import Button from "components/common/Button";
import palette from "lib/styles/palette";
import { fetchCreateComment, fetchDeleteComment, fetchReadComment, fetchUpdateComment } from "lib/api/comments";

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
`;
const CommentBlock = styled.li`
    padding-top: 1.5rem;

    .user{
        margin: 0.5rem 0;
        display:flex;
        align-items:center;

        .actions{
        margin-left:auto;
        }

        span + span:before {
            padding: 0 0.25rem;
            color: ${palette.gray[4]};
            content: '';
        }

        b{
            font-weight:800;
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

    .actions {
        display: flex;
        margin-top: 0.5rem;
    }
`;

function ActionButtons({ handleDelete, handleUpdate }: { 
  handleDelete: () => void; 
  handleUpdate: () => void; 
}) {
  return (
    <div className="actions">
      <Button 
        type='button' 
        label="삭제" 
        onClick={handleDelete} 
      />
      <Button 
        type='button' 
        label='수정'  
        cyan={true}  
        onClick={handleUpdate} 
      />
    </div>
  );
}

function CommentContainer({ postId }: { postId: string }) {
  // TODO 사용자 정보 체크
  const userId = sessionStorage.getItem('userId');

  const [value, setValue] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  // 댓글 조회
  const {
    data,
    isLoading,
    isError,
    refetch:refetchComments
  } = useQuery(["comments", postId], () => fetchReadComment(postId));

  const comments:any = data?.data ||[];
  // 댓글 생성
  const createMutation = useMutation(fetchCreateComment);
  // 댓글 삭제
  const deleteMutation = useMutation(fetchDeleteComment);
  // 댓글 수정
  const updateMutation = useMutation(fetchUpdateComment);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createMutation.mutate({ postId, content: value });

    setValue("");
  };

  const handleDelete = (id: string)=>{
    deleteMutation.mutate(id,{
      onSuccess:()=>{
        refetchComments();
      }
    })
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditValue(e.target.value);
  };

  const handleUpdate = (id: string) => {
    updateMutation.mutate({ id, postId, content: editValue }, {
      onSuccess: () => {
        refetchComments();
        setEditingCommentId(null);
        setEditValue("");
      }
    });
  };

  return (
    <Wrapper>
      <h1>{comments?.length}개의 댓글</h1>
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
        {comments?.map((c: any) => {
          const isOwnComment = userId === c.user._id;
          const isEditing = editingCommentId === c._id;
          
          return (
            <CommentBlock key={c.id}>
              <div className="user">
                <span>
                  <Link href="/">
                    <b>{c.user.username}</b>
                  </Link>
                </span>
                <span>{new Date(c.createdAt).toLocaleDateString()}</span>
                {isOwnComment && (
                  <ActionButtons 
                    handleDelete={() => handleDelete(c._id)} 
                    handleUpdate={() => {
                      setEditingCommentId(c._id);
                      setEditValue(c.content);
                    }} 
                  />
                )}
              </div>
              <div className="comment">
                {isEditing ? (
                  <>
                    <textarea
                      name="comment"
                      id="comment"
                      value={editValue}
                      onChange={handleEditChange}
                      cols={30}
                      rows={4}
                      placeholder="댓글을 수정하세요"
                    />
                    <Button 
                      type="button" 
                      label="수정 완료" 
                      cyan 
                      onClick={() => handleUpdate(c._id)}
                    />
                    <Button 
                      type="button" 
                      label="취소" 
                      onClick={() => {
                        setEditingCommentId(null);
                        setEditValue("");
                      }}
                    />
                  </>
                ) : (
                  <p>{c.content}</p>
                )}
              </div>
            </CommentBlock>
          );
        })}
      </ul>
    </Wrapper>
  );
}

export default CommentContainer;
