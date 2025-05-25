import React, { useCallback, useEffect, useRef } from 'react';
import TodoInsert from 'components/common/Template/TodoInsert';
import TodoList from 'components/common/Template/TodoList';
import { Wrapper, TemplateBlock } from 'components/common/Template/Template.styled';

function Template({ title, todos, setTodos }) {
  const targetRef = useRef(null);
  const createId = useRef(3);

  const handleInsert = useCallback((text:string) => {
      const newTodo = [
        ...todos,
        {
          id: createId.current++,
          text,
          completed:false,
        }
      ];
      setTodos(newTodo);
    },[todos]);

  const handleRemove = useCallback((id:number) => {
      const newTodo = [...todos]
      .filter(todo =>
        todo.id !== id);
      setTodos(newTodo);
    },[todos]);

  const handleToggle = useCallback((id:number) => {
      const newTodo = [...todos];
      newTodo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
      setTodos(newTodo);
    },[todos]);

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  const handleScroll = ()=>{
    if(window.scrollY > 0){
      targetRef.current.style.position = "fixed";
      targetRef.current.style.top = "112px";
    }
  }

  return (
    <Wrapper>
      <TemplateBlock ref={targetRef}>
        <h2>{title}</h2>
        <TodoInsert handleInsert={handleInsert} />
        <TodoList 
          todos={todos} 
          handleRemove={handleRemove} 
          handleToggle={handleToggle} 
        />
      </TemplateBlock>
    </Wrapper>
  );
}

export default Template;
