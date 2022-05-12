import React, { useState } from 'react'
function PageMyinfo() {
    const [name, children] = useState(0);
    return (
        <div>
            안녕하세요, 으이 My {name}입니다.<br/>
            chidren  값은 {children}
            입니다.
        </div>
    )
}


export default PageMyinfo
