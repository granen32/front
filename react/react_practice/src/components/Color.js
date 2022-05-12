import React from 'react'

const Color = ({color,btnRed, btnYellow, btnGreen}) => {
    return (
        <div>
            <h1 style={{color}}>색상 구하기{Color}</h1>
            <button onClick={btnRed} style={{color:'red'}}>빨강</button>
            <button onClick={btnYellow} style={{color:'yellow'}}>노랑</button>
            <button onClick={btnGreen} style={{color:'green'}}>초록</button>
        </div>
    )
}

export default Color