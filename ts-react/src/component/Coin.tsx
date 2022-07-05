import React ,{ useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled  from 'styled-components';
import { useEffect } from 'react';
import  axios  from 'axios';
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
  const [coin, setCoin] = useState({});
  const [priceInfo, setpriceInfo] = useState({});
  // 컴포넌트가 생성될 때 한번만 코드 실행 === useEffect
  const getCoin = async() =>{
    const coinData = await axios(`https://api.coinpaprika.com/v1/coins/${coinId}`);
    const priceData = await axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
    setCoin(coinData.data.description);
    setpriceInfo(priceData.data.description);
    console.log(coinData.data.description);
    console.log(priceData.data.quotes.USD.price);

  };
  useEffect(() =>{
    getCoin();
  },[]);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...{coinId}</Loader> : null}   
    </Container>
  )
}

export default Coin