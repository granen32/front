import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
const TodoListBlock = styled.div`
    background: #fff;
    flex: 1;
    padding: 20px 30px 48px;
    overflow-y: auto;
    
`;

const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    // id값을 배열해준거고
    // 여기서 props 데이터를 넘긴거야 투두 아이템에
    <TodoListBlock>
        {todos.map(todo =>(
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
        ))}
    </TodoListBlock>
  );
};

export default React.memo(TodoList);
