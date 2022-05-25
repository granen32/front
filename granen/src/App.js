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
    setTodos((currentTodo => [todo, ...currentTodo]));
    // 값을 담아줌 새로운 state 생성
    setTodo("");
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
      <hr/>
      <ul>
        {todos.map((item, index) => <li key={index}>{item}</li> )}
        {/*  */}
      </ul>

    </form>

    </>
  );
}

export default App;
