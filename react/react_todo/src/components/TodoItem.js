import React from 'react';
import styled, {css} from 'styled-components';
import { MdDelete,MdDone } from "react-icons/md";
// 텍스트
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => props.checked && css`
        text-decoration: dotted;
    `}
`;

// 삭제
const Remove = styled.button`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
`;


// 블록
const TodoItemBlock =styled.div`
    display: flex;
    align-items: center;
    padding:12px 0 12px;
    &:hover{
        ${Remove}{
            opacity: 1;

        }
    }
`;
// 체크
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #ccc;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 20px 5px 0;
    cursor: pointer;
    ${props => props.checked && css`
        border:1px solid #e8d9a9;
        color:#e8dda9;
    `}
`;




const TodoItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;
  return (
    <TodoItemBlock>
        {/* 체크하면 나오게 done ->> 됨 아니면 안됨 */}
        <CheckCircle checked={checked} onClick={() => onToggle(id)}>
            {checked && <MdDone/>}
        </CheckCircle>
        {/* 텍스트 보임 */}
        <Text checked={checked}>
            {text}
        </Text>
        <Remove onClick={() => onRemove(id)}>
            <MdDelete/>
        </Remove>
    </TodoItemBlock>
  )
};

export default TodoItem;
