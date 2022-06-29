import React from 'react'
import styled from 'styled-components'
interface ContainerProps {
  //인터 페이스는 객체 모양을 타입스크립트에게 설명해주는 타입스크립트에 개념이다. ->객체에게 설명해주는 것
  bgColor : string;
  borderColor? : string;
  text? :string;
  // 옵셔널 프롭스를 활용하여 할당을 해줘도 되고 할당을 안해줘도 되게끔 해줄 수 있다.
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50px;
  border: 1px solid ${props => props.borderColor};
  background-color: ${(props) => props.bgColor};
`;

const Circle = ({bgColor,borderColor, text ="default text"}:ContainerProps) => {
  return (
    <>
      <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>{text}</Container>
    </>
  )
}

export default Circle