import  React , {useState } from 'react';
import styles from "../assets/scss/TodoForm.module.scss";
import { TodoFormProps } from "../types"

const TodoForms : React.FC<TodoFormProps> = () => {
  const [newTodo, setTodo] = useState<string>("");
  return (
    <>
      <form action="" className={styles.TodoForm}>
        <input type="text" value={newTodo} placeholder="하고 싶은 걸 입력해줘!" className={styles.TodoInput}/>
      </form>
    </>
  )
}

export default TodoForms;
