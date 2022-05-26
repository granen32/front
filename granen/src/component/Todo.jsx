import { useState } from 'react';
const  Todo = ()=> {
  const [todo, setTodo] = useState("");
  // 인풋값 벨류 받아서 만들 투두라 스트링으로 해야함
  const [todos, setTodos] = useState([]);
  // 리스트 파악해야해서 배열로 받아야함
  const onChange = (event) =>{
    setTodo(event.target.value);
    // 인풋 값 받아옴
  }
  const onSubmit = (event) =>{
    event.preventDefault();
    // 서브밋시 값 초기화 막음
    if(todo === ""){
      return
    }
    setTodos((currentValue => [todo, ...currentValue]));
    // 인풋 데이터 todos 에 할당
    setTodo("");
    // 값 입력하고 나서 초기화
    console.log(todos);
  }
  return (
    <>
     <h1>todo list {todos.length}</h1>
     <form action="" onSubmit={onSubmit}>
      <input 
      value={todo}
      onChange={onChange}
      type="text" 
      placeholder='todo write'
      />
      <button>submit</button>
     </form>
     <ul>
     {todos.map((item, index) => <li key={index}>{item}</li> )}
     </ul>
    </>
  );
}

export default Todo;
