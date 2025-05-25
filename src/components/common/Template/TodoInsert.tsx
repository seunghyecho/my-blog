import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { TemplateForm } from 'components/common/Template/Template.styled';

function TodoInsert({ handleInsert }) {
  const [text, setText] = useState('');

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    setText('');
    handleInsert(text);
  }

  return (
    <TemplateForm onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='할 일을 입력하세요.'
        value={text}
        onChange={(e)=> setText(e.target.value)}
      />
      <button type='submit'><MdAdd /></button>
    </TemplateForm>
  );
}

export default TodoInsert;