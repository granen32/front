import React from 'react'

const Say = ({message, setOn, setLeave}) => {
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={setOn}>입장</button>
            <button onClick={setLeave}>퇴장</button>
        </div>
    )
}

export default Say;
