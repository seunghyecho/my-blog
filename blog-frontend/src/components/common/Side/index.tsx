import { useState } from 'react';
import Template from 'components/common/Template';

function Side() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'완료한 나의 할일은?',
      completed:true,
    },
    {
      id:2,
      text:'해야할 나의 할일은?',
      completed:false,
    }
  ]);
  return (
      <Template title='SCHEDULES' todos={todos} setTodos={setTodos}/>
  );
}

export default Side;
