import React, { useState } from 'react'

const LikeButton =() => {
    const [liked, setLiked] = useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    const onClick = () =>{
        setLiked(!liked);
    }
    return (
        <div style={{margin:20}}>
            <h2>안녕하세요. 이 프로젝트가 마음에 드시면 좋아요 버튼을 눌러주세요!</h2>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

export default LikeButton

