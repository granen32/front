import React, { useCallback, useState } from 'react';
import styled, {css} from 'styled-components';
import {IoMdAdd} from "react-icons/io";
const CircleButton = styled.div`
  background: #38d9a9;
  &:hover{
    background: #63e6be;
  }
  &:active{
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  font-size: 60px;
  color: white;
  border-radius: 40px;
  border: none;
  outline: none;

  ${props => props.open && css`
    background: #ff6b6b;
    &:hover{
      background: #ff8787;
    }
    &:active{
      background: #fa5252;
    }
    transform: translate(-50%, 50%) rotate(45deg);
    transition: 0.125s all ease-in;
  `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
`;

const InsertForm = styled.form`
  background: #faf9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border:1px solid #dee2e6;
  width: fit-content;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`


const TodoCreate = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e=>{
    setValue(e.target.value);
    console.log(e.target.value);
  }, []);

  // 데이터값 보내기
  const onSubmit = useCallback(
    e =>{
      onInsert(value);
      setValue('');
      // 데이터를 보내주면 초기화되게
      // 보내줄 때 폼을 쓰면 새로고침됨 이걸 막아줘야돼
      e.preventDefault();
    },
    [onInsert,value],
  )

  const onClick = useCallback(
    e =>{
      onInsert(value);
      setValue('');
      // 데이터를 보내주면 초기화되게
      // 보내줄 때 폼을 쓰면 새로고침됨 이걸 막아줘야돼
      e.preventDefault();
    },
    [onInsert,value],
  )


  return (
    <>
    <InsertFormPositioner>
      <InsertForm onSubmit={onSubmit}>
        <Input 
        autoFocus
         placeholder="할일 입력 후 엔터치기" 
         onChange={onChange}
         value={value}
          />
      </InsertForm>
    </InsertFormPositioner>
    <CircleButton onClick={onClick} >
      <IoMdAdd />
    </CircleButton>
    </>
  )
};

export default TodoCreate;

