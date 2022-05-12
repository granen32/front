import React from 'react'

const  Hello = ({color, name, isSpecial}) => {
    return (
        <div style={{color}} >
            {isSpecial && <strong>*</strong>}{name}
            {/* 폴시한 값을 출력하면 아무것도 안나온다 0은 제외 */}
            안녕하세요
        </div>
    )
}

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello
