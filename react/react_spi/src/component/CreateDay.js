import React from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
    const days = useFetch(`http://localhost:3001/days`);
    const navigation = useNavigate();
    const dayAdd = (e) =>{
        fetch(`http://localhost:3001/days/`,{
            method:'POST',
            headers :{
                'Content-Type' :'application/json',
                // 보내는 리소스의 타입을 뜻함 html등을 보낼 수 있음
            },
            body: JSON.stringify({
                day :days.length + 1,
                isDone:false
            }),
        }).then(res =>{
            if(res.ok){
               alert('생성이 완료됐습니다.');
               navigation(`/`);
            }
        });
    }
  return(
        <>
        <div>
            <h3>현재 일수 : {days.length}</h3>
            <button onClick={dayAdd}>Day 추가</button>
        </div>
    </>
  )
}
