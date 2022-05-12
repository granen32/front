import React from 'react';

function Hello({color, name, isSpecial}) {
    return <div style={{
        color
    }}>
        {isSpecial && <strong>*</strong>}
        안녕하세요{name}
    </div>
}
Hello.defalutProps ={
    name: '이름없음'
}
export default Hello;
