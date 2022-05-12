import React, { useState } from 'react'

const Word = ({word: w}) => {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow]= useState(word.isDone);
    const [isDone, setIsDone] = useState(word.isDone);

    const toggleShow = ()=>{
        setIsShow(!isShow);
    }

    const toggleDone = () =>{
        fetch(`http://localhost:3001/words/${word.id}`,{
            method:'PUT',
            headers :{
                'Content-Type' :'application/json',
                // 보내는 리소스의 타입을 뜻함 html등을 보낼 수 있음
            },
            body:JSON.stringify({
                ...word,
                isDone : !isDone,
            })
        }).then(res =>{
            if(res.ok){
                setIsDone(!isDone)
            }
        });

    }

    const delteWord = ()=>{
        if(window.confirm('삭제하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`,{
                method:'DELETE'
            }).then(res =>{
                if(res.ok){
                    setWord({id:0});
                }
            });
        }
    }

    if(word.id === 0){
        return null;
    }
    return (
        <tr key={word.id} className={isDone ? 'off' : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>{isShow ? '숨기기' : '보기'}</button>
                <button className='btn_del' onClick={delteWord}>삭제</button>
                {/* 문서 비구조화 할당을 위해  */}
            </td>
        </tr>
    )
}

export default Word
