import React ,{ useState,FormEvent } from 'react';

const UseStateTs = () => {
  const [value , setValue] = useState("");
  const onChage = (event:FormEvent<HTMLInputElement>) =>{
    const {
      currentTarget : {value},
    }= event;
    setValue(value);
  };
  const onSubmit = (event:FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
  }
  return (
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
  )
}

export default UseStateTs

