import React, {useRef, useState} from 'react';
import CreateUser from './components/CreateUser';
import UserList from './pages/UserList';

function App() {
  const [inputs, setInputs] = useState({
    userName:'',
    email:'',
  })
  const {userName, email} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }
  const [users, setUsers] = useState([
    {
      id:1,
      username:'kyu',
      email:'rnjsrbgud@naver.com'
      },
      {
      id:2,
      username:'kyu2',
      email:'rnjsrbgud2@naver.com'
      },
      {
      id:3,
      username:'kyu3',
      email:'rnjsrbgud3@naver.com'
      },
  ])
  // 기존 배열을 변경하지 않고 새로운 객체에 할당하는 방법으로
  // push, splice, sort는 사용금지 불변성 지키는 방법
  users.push()

  const nextId = useRef(4);

  const onCreate = () =>{
    const user = {
      id:nextId.current,
      ...inputs
    };
    setUsers([...users, user]);
    setInputs({
      userName:'',
      email:''
    })
    console.log(nextId.current);
    nextId.current +=1;
  }
  return (
    <>
      <CreateUser userName={userName} email={email} onCreate={onCreate} onChange={onChange}/>
      <UserList users={users}/>
    </>
  )
}

export default App;
