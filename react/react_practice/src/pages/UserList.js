import React from 'react'

// 두개의 컴포넌트 파일 선언 파일 분리해도됨
const User = ({user}) => {
    return(
        <div>
            {/* 이것들을 복사해서 그냥 보여줘도 되긴함 */}
            <strong>
                {user.username}
                <span> {user.email}</span>
            </strong>
        </div>
    )
}
const UserList = ({users}) => {
    // 이거를 배열로 받아올거임 프롭스로
    // const users = [
    //     {
    //     id:1,
    //     username:'kyu',
    //     email:'rnjsrbgud@naver.com'
    //     },
    //     {
    //     id:2,
    //     username:'kyu2',
    //     email:'rnjsrbgud2@naver.com'
    //     },
    //     {
    //     id:3,
    //     username:'kyu3',
    //     email:'rnjsrbgud3@naver.com'
    //     },
    // ]
    return (
        <div>
            {
                users.map(
                    (user) => (<User user={user} key={user.id}></User>)
                    // 하지만 여기서 키값이 없다면 맵에서 index를 할당해줘도 된다.
                )
            }
        </div>
    )
}

export default UserList
