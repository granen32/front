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
}

const Circle = ({bgColor}:CircleProps) => {
  return (
    <>
    <Container bgColor={bgColor}>

    </Container>
    </>
  )
}

export default Circle