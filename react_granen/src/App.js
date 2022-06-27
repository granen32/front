import styled from 'styled-components';
// 스타일드 컴포넌트 임포트!
const Father = styled.div`
  display:flex;
`;
const Box = styled.div`
  background-color : ${props => props.bgColor};
  width:100px; 
  height:100px; 
`;
const Text = styled.span`
  color:white;
`;
const Circle = styled(Box)`
  border-radius:50px;
`;
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;
const Input = styled.input.attrs({required : true})`
  background-color: tomato;
`;
function App() {
  return (
   <>
   <Father>
    <Box bgColor="teal">
      <Text>hello</Text>
    </Box>
    <Box bgColor="tomato"/>
    <Circle bgColor="tomato"/>
    {/* <Btn>log in</Btn>
    <Btn as="a" href="/">log in</Btn> */}
    <Input/>
    <Input/>
    <Input/>
    <Input/>
    <Input/>
    <Input/>
   </Father>
   </>
  );
}

export default App;
