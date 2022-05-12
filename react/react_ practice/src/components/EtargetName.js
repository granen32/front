import React, { useState } from 'react'

const EtargetName =() => {
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const{username,message} =form;
    const onChange = e =>{
       const nextForm = {
           ...form,
           [e.target.name]: e.target.value
       };
       setForm(nextForm);
    };
    const onClick = () =>{
        alert(username + ':' + message);
        setForm({
            username:'',
            message:''
        });
    }
    const onKeyPress= e =>{
        if(e.key === 'Enter'){
            onClick();
        }
    }
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
            type="text"
            name="userName"
            placeholder='사용자명'
            value={username}
            onChange={onChange}
            style={{margin:"10px"}}
            />
            <input 
            type="text"
            name="userName"
            placeholder='사용자명'
            value={message}
            onChange={onChange}
            style={{margin:"10px"}}
            onKeyPress={onKeyPress}
            />
            <br/>
            <button type='button' onClick={onClick} style={{color:'red', margin:'10px', background:'blue'}}>확인</button>
        </div>
    )
}

export default EtargetName
