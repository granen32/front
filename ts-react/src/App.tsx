import styled from 'styled-components';
const Container = styled.div`
  background-color:  ${(props) => props.theme.bgColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
   <>
   <Container>
    <Title>테스트</Title>
   </Container>
   </>
  );
}

export default App;
