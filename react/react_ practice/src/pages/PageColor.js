import React, { useState } from 'react'
import Color from '../components/Color';
const PageColor = () => {
    const [color, setColor] = useState("black");
    const btnRed = () =>{
        setColor("red");
    }
    const btnYellow = () =>{
        setColor("yellow");
    }
    const btnGreen = () =>{
        setColor("green");
    }
    return (
        <Color color={color} btnRed={btnRed} btnYellow={btnYellow} btnGreen={btnGreen}></Color>
    )
}

export default PageColor;
