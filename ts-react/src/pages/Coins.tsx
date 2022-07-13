import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CoinInterface } from "../types" 
import { useQuery } from 'react-query';
import { fetchCoins } from '../api';
import HelmetTitle from './HelmetTitle';
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
  const {isLoading,data} = useQuery<CoinInterface[]>("allCoins", fetchCoins);

  return (
    <Container>
      <HelmetTitle />
      <Header>
        <Title>coins</Title>
      </Header>
      {isLoading ? <Loader>"Loading..."</Loader>: <CoinList>
        {data?.slice(0, 50).map(coin => <Coin key={coin.id}>
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