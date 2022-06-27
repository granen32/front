import styled, {keyframes} from 'styled-components';
// 스타일드 컴포넌트 임포트!
const Wrapper = styled.main`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color: ${(props => props.theme.backgroundColor)};
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
//theme -> 씸즈 모든 색깔을 하나의 오브젝트에 넣어줘서 사용함 컴포넌트의 색을 일일히 바꾸는 게 아님

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
   <>
    <Wrapper>
      <Box>
        <Emoji as="p">🤣</Emoji>
      </Box>
      <Title>Title</Title>
    </Wrapper>
   </>
  );
}

export default App;
