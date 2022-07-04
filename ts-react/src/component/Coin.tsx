import React ,{ useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled  from 'styled-components';
const Container = styled.section`
  padding: 0 10px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 타이틀
const Title = styled.h1`
  font-size: 48px;
  color:${props => props.theme.accentColor};
`;
const Loader = styled.div`
    text-align: center;
    color: #fff;
`;
interface coinIdProps{
  coinId : string;
}
interface locationProps {
  state:{
    name:string;
  }
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const {coinId} = useParams<keyof coinIdProps>() as coinIdProps;
  const {state} = useLocation() as locationProps;
  return (
    <Container>
      <Header>
      <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}   
    </Container>
  )
}

export default Coin