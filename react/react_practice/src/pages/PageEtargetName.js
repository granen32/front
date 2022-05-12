import React, { useState } from 'react'

const PageEtargetName = () => {
    // 자 이걸 구조분해할당 해봅시다.
    // 일단 유즈스테이트에서 폼하고 셋폼 값은 여기서 고정인거 같고 
    // 인풋 값들 초기화 유즈스테이트 사용
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    // 이 유즈스테이트 값으로 초기화 한걸  form에 할당
    const{username,message} =form;
    // 값 변경시 폼에 있는 요소들의 값을 name === value 화?
    const onChange = e =>{
       const nextForm = {
           ...form,
           [e.target.name]: e.target.value
       };
    //form 값 변경
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
            name="username"
            placeholder='사용자명'
            value={username}
            onChange={onChange}
            style={{margin:"10px"}}
            />
            <input 
            type="text"
            name="message"
            placeholder='입력'
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

export default PageEtargetName
