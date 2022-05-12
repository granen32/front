import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const onClick = () =>{
        import('../pages/Todo.js').then(({Todo}) =>{
            const position = todos.length + 1;
            const newTodo = <Todo key={position} title={`할일 ${position}`}/>;
            setTodos([...todos, newTodo]);
        });
    }

    return (
        <div>
            <button onClick={onClick}>할일 추가</button>
            {todos}
        </div>
    )
}

export default TodoList
