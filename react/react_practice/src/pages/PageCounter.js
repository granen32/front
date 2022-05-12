import React from 'react'
import { useState } from "react";
import Counter from "../components/Counter";
const PageCounter = () =>{
    const [number, setNumber] = useState(0);
    const increase = () =>{
        setNumber(number + 1 );
    }
    const decrease = () =>{
        number > 0 ? setNumber(number - 1 ) : alert("0 보다 작아요");
    }
    return <Counter number={number} increase={increase} decrease={decrease}></Counter>
};

export default PageCounter;