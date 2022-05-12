import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0 0 .5rem rgba(0,0,0, .04);
    margin: 0 auto;
    margin-top: 5rem;
    background: #fff;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
`;

const TodoTemplate = ({children}) => {

  return (
   <TodoTemplateBlock>
       {children}
   </TodoTemplateBlock>
  )
}

export default TodoTemplate;
