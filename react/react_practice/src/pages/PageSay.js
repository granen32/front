import React, { useState } from 'react'
import Say from '../components/Say';
const PageSay = () => {
    const [message, setMessage] = useState('');
    const setOn = () => {
        setMessage("어서오시고");
    }
    const setLeave = () => {
        setMessage("잘가시고");
    }

    return (
        <Say message={message} setOn={setOn} setLeave={setLeave}/>
        
    )
}

export default PageSay;