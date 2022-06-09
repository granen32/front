import React from 'react'
import { useState } from 'react';
import { todoType } from "../types" 
const [todo, setTodo] = useState<todoType | null>(null);
const onChange = (event:React.FormEvent<HTMLInputElement>) => {
  const target = event.target as HTMLTextAreaElement;
  console.log(target);
};

export const AppTodo = () => {
  return (
    <>
      <form className="hidden" id="login-form">
      <input required type="text" placeholder="What is your name" onChange={onChange}/>
      <input type="submit" value="Log In" />
      </form>
    </>
  )
}
