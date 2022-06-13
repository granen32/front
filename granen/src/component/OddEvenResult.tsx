import React from 'react'
import { CounterType } from "../types" 
const OddEvenResult = ({count} : CounterType) => {
  console.log(count);
  return (
    <div>{count % 2===0 ? '짝수' :"홀수"}</div>
  )
}

export default OddEvenResult;