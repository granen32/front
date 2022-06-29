import React from 'react'
import styled from 'styled-components'

interface ContainerProps {
  bgColor : string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50px;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor : string;
  //인터 페이스는 객체 모양을 타입스크립트에게 설명해주는 타입스크립트에 개념이다.
}

const Circle = ({bgColor}:CircleProps) => {
  return (
    <>
    <Container bgColor={bgColor} />
    </>
  )
}

export default Circle