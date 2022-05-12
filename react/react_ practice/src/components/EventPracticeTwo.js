import React from 'react'

const EventPracticeTwo = ({message, onCahngeMessage}) => {
    
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input 
            type="text"
            name="userName"
            placeholder='사용자명'
            value={message}
            onChange={onCahngeMessage}
            style={{margin:"10px"}}
            />
            <br/>
        </div>
    )
}

export default EventPracticeTwo
