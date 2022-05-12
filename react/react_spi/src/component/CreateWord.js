import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import useFetch from '../hooks/useFetch';
export default function CreateWord(){
    const days = useFetch("http://localhost:3001/days");
    const navigation = useNavigate();
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(engRef.current.value);
        console.log(korRef.current.value);
        console.log(dayRef.current.value);

        fetch(`http://localhost:3001/words/`,{
            method:'POST',
            headers :{
                'Content-Type' :'application/json',
                // 보내는 리소스의 타입을 뜻함 html등을 보낼 수 있음
            },
            body: JSON.stringify({
                day :dayRef.current.value,
                eng :engRef.current.value,
                kor :korRef.current.value,
                isDone:false
            }),
        }).then(res =>{
            if(res.ok){
               alert('생성이 완료됐습니다.');
               navigation(`/day/${dayRef.current.value}`)
            }
        });
    }
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return (
    <form>
        <div className="input_area">
            <label>
                eng
            </label>
            <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div className="input_area">
            <label>
                kor
            </label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div className="input_area">
            <label>
                Day
            </label>
            <select ref={dayRef}>
                {days.map(day =>( <option key={day.id} value={day.day}>{day.day}</option>))}
            </select>
        </div>
        <button onClick={onSubmit}>저장</button>
    </form>
    )
};
