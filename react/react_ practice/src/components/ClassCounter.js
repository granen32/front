import React, { Component } from 'react'

class ClassCounter extends Component{
    // constructor(props){
    //     super(props);
    //     // this 초기값 설정
    //     this.state = {
    //         number: 0,
    //         fiexNumber : 0
    //     };
    // }
    // -->> 이런 경우 스테이트 값을 한번더 타고 오는 경우라 별로임
    // 즉 이럴 때는 한번에 스테이트를 빼서 활용하면 됨
    state = {
        number: 0,
        fiexNumber : 0
    };
    // render 화면을 렌더링 하는 곳
    render() {
        // state 값을 조회 할 때는 this.state 로 조회합니다.
        const {number, fiexNumber} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <h2 /*바뀌지 않는 값 */ >바뀌지 않는 값 : {fiexNumber}</h2>
                <button
                    // 버튼 클릭시 함수 지정하고 그걸 값을 변경할걸 스테이트에 할당함
                    onClick={()=>{
                        this.setState({number : number+1})
                    }}
                >함수값 증가</button>
            </div>
        );
    };
}


export default ClassCounter;