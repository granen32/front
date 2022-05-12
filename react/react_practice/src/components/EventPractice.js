import React from 'react'

const EventPractice = ({userName ,onChangeUsername}) => {
    
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
            type="text"
            name="userName"
            placeholder='사용자명'
            value={userName}
            onChange={onChangeUsername}
            style={{margin:"10px"}}
            />
        </div>
    )
}

export default EventPractice
