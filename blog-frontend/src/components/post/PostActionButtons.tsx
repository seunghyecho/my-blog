import React, { useState } from 'react';
import styled from 'styled-components';
import RemoveModal from 'components/post/RemoveModal';
import Button from 'components/common/Button';

const PostButtonWrap = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
`;

const PostButton = styled(Button)`
  font-weight: 600;
`;
function PostActionButtons({ onEdit, onRemove }) {
  const [modal, setModal] = useState(false);

  const onRemoveClick = ()=>{
    setModal(true);
  };
  const onCancel = ()=>{
    setModal(false);
  }
  const onConfirm = ()=>{
    setModal(false);
    onRemove();
  }
  
  return (
    <>
      <PostButtonWrap>
        <PostButton onClick={onRemoveClick}>삭제</PostButton>
        <PostButton onClick={onEdit} cyan>수정</PostButton>
      </PostButtonWrap>
      <RemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}

export default PostActionButtons;
