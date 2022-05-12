import React from 'react';
import PropTypes from 'prop-types';



// props
// properties 속성들을 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소인데
// 모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 합니다.
// 즉 순수함수 처럼 동작해야 하고 값을 변경 하는건 ㄴㄴ하다 이말이다.
// 또한 부모 컴포넌트가 자식 컴포넌트에게 이 값 너 가져! 라고 할당해주는 거다. 유산? 이라고 생각하자

// const Myinfo = (props) =>{
//     // 화살표 함수 도입에 영향을 준 두 요소 + @ 보다 코드 짧아짐 및 바인딩하지 않은 this.
//     return(
//         <div>
//             안녕하세요, 으이 My {props.name}입니다.<br/>
//             chidren  값은 {props.children}
//             입니다.
//         </div>
//     ) 
// }
// // 비구조분해할당 프롭스를 바로 할당 하는 방법 
// const Myinfo = (props) =>{
//     const {name, children} = props;
//     return(
        // <div>
        //     안녕하세요, 으이 My {name}입니다.<br/>
        //     chidren  값은 {children}
        //     입니다.
        // </div>
//     ) 
// }
// 프로토타입 기본값 할당
const Myinfo = ({name, children}) =>{
    return(
        <div>
            안녕하세요, 으이 My {name}입니다.<br/>
            chidren  값은 {children}
            입니다.
        </div>
    );
}

// props에 기본값을 할당하여 props에 값이 변경을 하지 못 할 때도 기본적인 값이 보이게 해줌
Myinfo.defaultProps ={
    name:"연봉 4억의 사나이"
}

Myinfo.prototype ={
    name:PropTypes.string
}
export default Myinfo
