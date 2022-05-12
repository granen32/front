import React, { useState } from 'react';
import '../assets/css/ValidationSample.css';
const ValidationSample = () => {
    const [input, setInput] = useState({
        password:'',
        clicked:false,
        validated:false,
    });
    const {password, clicked, validated} =input;
    
    const handleChange = (e) =>{
        setInput({
            password:e.target.value,
        });
    }

    const ButtonhandleChange = () =>{
        setInput({
            clicked:true,
            validated:password === '0000'
        });
    }

    return (
        <div>
            <input type="password" value={password} onChange={handleChange} className={clicked ? (validated ? 'success' : 'failure'): ''}></input>
            <button onClick={ButtonhandleChange}>검증하기</button>
        </div>
    )
}

export default ValidationSample;
