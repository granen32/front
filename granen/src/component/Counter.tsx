import React,{ useState } from 'react'
import OddEvenResult from './OddEvenResult';
const Counter = () => {
  const [count, setCount] = useState(0);
  const onIncrease= () =>{
    setCount(count + 1);
  }
  const onDecrease = () =>{
    count > 0 ? setCount(count - 1 ) : alert("0 보다 작아요");
  }
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <OddEvenResult count={count}/>
      </div>
    </>
  )
}

export default Counter;