import React from 'react'
import { Clock } from '../component/Clock';
import { AppTodo } from '../component/AppTodo';
const Chrome_Todo = () => {
  return (
    <>
      <Clock />
      <AppTodo/>
      <h1 id="greeting" className="hidden">헤딩태그</h1>
      <form action="" id="todo-form">
      <input type="text" placeholder="Write To do and Press" required />
      </form>
      <ul id="todo-list">

      </ul>
      <div id="quote">
      <span></span><span></span>
      </div>
      <div id="weather">
      <span></span><span></span>
      </div>
    </>
  )
}

export default Chrome_Todo