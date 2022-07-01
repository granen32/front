import React from 'react'
import { useParams } from 'react-router-dom';

const Coin = () => {
  const {coinId} = useParams();
  console.log(coinId);
  return (
    <>
      <h1>conin</h1>
    </>
  )
}

export default Coin