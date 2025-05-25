import React from 'react';
import { FormButton, FormButtonWrap } from 'components/post/Form.styled';

function ActionButtons({ onPublish, onCancel, isEdit }){ 
  return (
    <FormButtonWrap>
      <FormButton type='button' label='취소' onClick={onCancel} />
      <FormButton 
        type='button' 
        label={isEdit? '수정': '등록'} 
        onClick={onPublish} 
        cyan={true} 
      />
    </FormButtonWrap>
  );
};

export default ActionButtons;