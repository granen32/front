import React, { useRef, useState, useCallback } from 'react';
import { createGlobalStyle } from "styled-components";
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9eecf;
  }
`;

function App() {

  // 더미함수
  function createBulkTodos(){
    const array = [];
    for(let i=0; i<=500; i++){
      array.push({
        id:i,
        text: `할일 ${i}을 제대로 하자`,
        checked:false,
      });
    }
    return array;
  }

  const [todos, setTdos] = useState(createBulkTodos);
    // 카운팅 숫자 카운팅 스타~
  // 이거는 투두리스트의 숫자
  const nextId = useRef(501);

  // 여기서 투두를 카운트 해줌
  const onInsert = useCallback(
    text => {
      const todo ={
        id:nextId.current,
        // 커렌트로 해야하는 이유는? 이게 유즈 레프라 그렇다.
        text,
        checked :false,
      };
      setTdos(todos.concat(todo));
      nextId.current +=1;
      // 1씩 더 카운팅 해줌
    },[todos],
  );

    // 삭제함수
    const onRemove = useCallback(id=>{
      setTdos(todos =>todos.filter(todo => todo.id !== id));
    },[]);

    // 온토글
    const onToggle = useCallback(id=>{
      setTdos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} :todo,),
      )
    },[])
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        {/* 날짜 */}
        <TodoHead/>
        {/* list에다가 props를 전달해준거고 */}
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        <TodoCreate onInsert={onInsert} />
      </TodoTemplate>
    </>
  );
}

export default App;
