import React , { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import  axios  from 'axios';
import { CoinInterface } from "../types" 
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
const CoinList = styled.ul`
  
  
`;
const Coin = styled.li`
  background-color: white;
  color: ${(props)=> props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a{
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color .5s ease-in-out;
  }
  &:hover{
    a{
      color: ${props => props.theme.accentColor};
    }
  }
`;
// 타이틀
const Title = styled.h1`
  font-size: 48px;
  color:${props => props.theme.accentColor};
`;
const Loader = styled.div`
    text-align: center;
`;
const Img = styled.img`
  max-width: 35px;
  width: 100%;
  max-height: 35px;
  margin-right: 10px;
`


const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const getCoins = async() =>{
    const res  =  await axios("https://api.coinpaprika.com/v1/coins");
    setCoins(res.data.slice(0, 100));
    setLoading(false);
  };
  useEffect(()=>{
    getCoins();
  });
  return (
    <Container>
      <Header>
        <Title>coins</Title>
      </Header>
      {loading ? <Loader>"Loading..."</Loader>: <CoinList>
        {coins.map(coin => <Coin key={coin.id}>
          <Link 
            to={{
              pathname : `/${coin.id}`,
            }}
            state={{
              name : coin.id
            }}
            >
            <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt="" />
            {coin.name} &rarr;
          </Link>
        </Coin>)}
      </CoinList>}
    </Container>

  )
}

export default Coins