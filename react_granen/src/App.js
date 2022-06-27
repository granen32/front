import styled, {keyframes} from 'styled-components';
// 스타일드 컴포넌트 임포트!
const Wrapper = styled.main`
  display: flex;
`;
const rotateAnimation = keyframes`
  0%{
    transform: rotate(360deg);
    border-radius: 0px;
  }50%{
    border-radius: 100px;
  }100%{
    transform: rotate(0);
    border-radius: 0;
  }
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation:${rotateAnimation} 3S linear infinite;
  ${Emoji}{
    &:hover,&:active{
      font-size: 76px;
    }
  }
`;


function App() {
  return (
   <>
    <Wrapper>
      <Box>
        <Emoji as="p">🤣</Emoji>
      </Box>
    </Wrapper>
   </>
  );
}

export default App;
