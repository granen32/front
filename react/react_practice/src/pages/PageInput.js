import React, { useState, useRef } from 'react';
// useRef는 돔에 직접적으로 조작하는 리액트
function PageInput() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const {name, nickname} = inputs;
  // 유즈스테이트를 활용하여 인풋 여러개를 관리하기


  const onChange = (e) => {
    const{name, value} = e.target;
    // 이렇게 하는 이유는 name 값과 value값을 추출해 주는거임
    // 필수적이지는 않지만 두번 입력하기 귀찮음
    // const nextInputs = {
    //   ...inputs,
    //   [name] : value,
    //   새로운 객체를 새로 쓰겠다 업데이트 한거다
    //   전개연산자 스프레드
    // }
    // setInputs(nextInputs
    //   리액트에서 객체를 업데이트 할 때는 기존의 객체를 복사하고
    // );
    // 만약에 불변성을 지키지 않고 그대로 값을 할당하는 방식을 사용하게 된다면 변화가 발생하지 않게 됨
    // inputs[name] = value 이렇게 해도 업데이트가 안됨
    setInputs({
      ...inputs,
      // 객체를 복사하고 나서
      [name] : value,
      // 상태를 업데이트 해줘야한다
    });
  };

  const onReset = () => {
    // const resetInputs ={
    //   ...inputs,
    //   [name] : '',
    //   [nickname] : ''
    // }
    //   setInputs(resetInputs
    //   리액트에서 객체를 업데이트 할 때는 기존의 객체를 복사하고
    // );
    setInputs(
      {
        ...inputs,
        name : '',
        nickname : '',
      }
    )
    // 네임 인풋에 커렌트를 사용하게 되면 포커스가 가게됨
    nameInput.current.focus();

  };

  return (
    <div>
        <input placeholder='이름' name='name' value={name} onChange={onChange} ref={nameInput}/> 
        <input placeholder='닉네임' name='nickname'  value={nickname} onChange={onChange}/>
        <button onClick={onReset}>초기화</button>
        <div>
          <strong>{name} : ({nickname})</strong>
        </div>
    </div>
  )
}

export default PageInput;