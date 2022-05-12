import React from 'react'

function CreateUser({userName, email, onChange, onCreate}) {
    // 요번에는 프롭스로 받아와서 관리할거임
    return (
        <div>
            <input name='userName' placeholder='계정명' onChange={onChange} value={userName}/>
            <input name='email' placeholder='email' onChange={onChange} value={email}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUser
