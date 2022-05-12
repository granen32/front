import React, { useState } from 'react'
import LikeButton from './LikeButton';

const CountDown =() => {
    const [count, setCount] = useState(0);
    const increase= () =>{
        setCount(count + 1);
    }
    const decrease = ()=>{
        setCount(count-1);
    }
    return (
        <>
            <div>
                <LikeButton/>
                    <div style={{margin:20}}>
                        <span>현재 카운트 : {count}</span><br />
                        <button onClick={increase}>증가</button>
                        <button onClick={decrease}>감소</button>
                    </div>
            </div>
        </>
    )
}

export default CountDown

