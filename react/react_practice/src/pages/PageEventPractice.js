import React, { useState } from 'react'
import EventPractice from '../components/EventPractice';
import EventPracticeTwo from '../components/EventPracticeTwo';
const PageEventPractice =()=> {
    // 유저 정보 변경 사항
    // 스테이트 값 초기화 후 프롭스 할당
    const [userName, setUsename] = useState("");
    // 유저 네임 변경값
    // 유저 스테이트값 셋 유저로 타겟된 유저네임값 변경
    // 임의로 변경 ㄴㄴ
    const onChangeUsername = e =>{
        setUsename(e.target.value);
        console.log(e.target.value);
        // 유저 스테이트 값 할당 할 때는 생각을 합시다 휴먼
    }

    const [message, setMessage] = useState("");
    // 유저스테이스 선언 후 메시지 가져옴
    // 온체인지에서 메시지값 변경
    const onCahngeMessage = e =>{
        setMessage(e.target.value);
        console.log(e.target.value);
    }
    // 이부분은 구조분해할당이..? 가능한지 모르겠음
    // 프롭스로 받고 넘겨도 값이 전달이 되나 궁금
    const onClick = () =>{
        alert(userName + ":" +message);
        setUsename('');
        setMessage('');
    }
    const onKeyPress= e =>{
        if(e.key === 'Enter'){
            onClick();
        }
    }
    // 클릭시 값 변경
    return (
        <>
            <EventPractice userName={userName} onChangeUsername={onChangeUsername}></EventPractice>
            <EventPracticeTwo message={message} onCahngeMessage={onCahngeMessage} onKeyPress={onKeyPress}></EventPracticeTwo>
            <button type='button' onClick={onClick}>확인하기</button>
        </>
    )
}

export default PageEventPractice
