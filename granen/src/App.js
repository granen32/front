import { useState } from 'react';
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // 초기값 설정 문자열로 설정
  const onChange = (event) =>{
    setTodo(event.target.value);
    // 상태값을 변경하는 함수를 활용하여 벨류값을 가져옴
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    if(todo === ""){
      return
    }
    setTodo("");
    setTodos((currentTodo => [todo, ...currentTodo]));

  }
  console.log(todos);
  return (
    <>
    <h1>MY TODOS ({todos.length})</h1>
    <form action="" onSubmit={onSubmit}>
      <input 
        onChange={onChange}
        value={todo} 
        type="text" 
        placeholder="Write your to do..."
      />
      <button>submit</button>
    </form>

    </>
  );
}

export default App;
