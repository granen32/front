import Circle from "./pratice/Circle";
import { useState,FormEvent } from 'react';

function App() {
  const [value , setValue] = useState("");
  const onChage = (event:FormEvent<HTMLInputElement>) =>{
    const {
      currentTarget : {value},
    }= event;
    setValue(value);
  };
  const onSubmit = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log("hello", value);
  }
  return (
   <>
    <Circle bgColor="teal" text="i'm here"/>
    <Circle bgColor="tomato" borderColor="red"/>
    <div>
      <form action="" onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="username" 
          value={value} 
          onChange={onChage}
        />
        <button>log in</button>
      </form>
    </div>
   </>
  );
}

export default App;
