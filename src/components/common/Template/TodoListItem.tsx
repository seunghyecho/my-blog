import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import { ListItem, CheckBox, RemoveBox } from 'components/common/Template/Template.styled';

function TodoListItem({ todo, handleRemove, handleToggle }) {
  const { id, text, completed } = todo;
  return (
    <ListItem>
      <CheckBox
        className={completed && 'completed'}
        onClick={() => handleToggle(id)}
      >
        {completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBox>
      <p>{text}</p>
      <RemoveBox onClick={() => handleRemove(id)}><MdRemoveCircleOutline /></RemoveBox>
    </ListItem>
  );
}

export default React.memo(TodoListItem);

//TODO react.memo를 쓰면 todo, handleRemove, handleToggle이 바뀌지 않으면 리렌더링 하지 않음