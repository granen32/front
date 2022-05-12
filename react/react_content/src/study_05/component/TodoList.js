import React, { useState } from 'react'


const TodoList = () => {
    const [desc, setDesc] = useState("");
    const [currenId, setCurrenId] = useState(1);
    const [todoList, setTodoList] = useState([]);

    const onTodo = ()=>{
        const todo= {id:currenId, desc} ;
        setCurrenId(currenId + 1);
        setTodoList([...todoList, todo]);
    }
    const onDelite = (e)=>{
        const id = Number(e.target.dataset.id);
        const newTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(newTodoList);
    }
    return (
        <>
            <h3>할일 목록</h3>
            <ul>
                {todoList.map(todo =>{
                    <li key={todo.id}>
                        <span>{todo.desc}</span>
                        <button data-id={todo.id} onClick={onDelite}> 
                            삭제
                        </button>
                    </li>
                })}
            </ul>
            <input type='text' value={desc} onChange={e => setDesc(e.target.value)}/>
            <button onClick={onTodo}>추가</button>
        </>
    )
}

export default TodoList;
