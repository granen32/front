import React from 'react';
import { 
  useLocation, 
  useParams, 
  Routes, 
  Route, 
  Outlet, 
  Link, 
  useMatch
} from 'react-router-dom';
import { 
  coinIdProps, 
  locationProps, 
  coinData, 
  priceInfoData
} from "../types" 
import styled  from 'styled-components';
import Price from '../pages/Price';
import Chart from '../pages/Chart';
import { useQuery } from 'react-query';
import { coinUrl,priceUrl  } from '../api';
import {Helmet} from 'react-helmet';
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
const CoinView = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0,0,0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const CoinViewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-of-type{
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const CoinDescription = styled.p`
  margin: 20px 0;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin: 25px 0px;
  gap: 10px;
`;
const Tab = styled.div<{isActive : boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight:400;
  background: rgba(0,0,0, 0.5);
  border-radius: 10px;
  padding: 10px 0;
  color:${props => props.isActive ? props.theme.accentColor : props.theme.textColor};
  a{
    display: block;
  }
`;
const Coin = () => {
  const {coinId} = useParams<keyof coinIdProps>() as coinIdProps;
  const {state} = useLocation() as locationProps;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const {isLoading : coinLoading , data : coData} = useQuery<coinData>(["coindata",coinId], () => coinUrl(coinId));
  const {isLoading : priceLoading , data : prData} = useQuery<priceInfoData>(["coinprice",coinId], () => priceUrl(coinId),{
    refetchInterval : 5000
  });
  const loading = coinLoading || priceLoading;
  return (
    <Container>
      <Helmet>
        <title>{state?.name  ? state.name : loading ? " loading...!" : prData?.name}</title>
      </Helmet>
      <Header>
        <Title>{state?.name  ? state.name : loading ? " loading...!" : prData?.name}</Title>
      </Header>
      {loading ? <Loader>Loading...{coinId}</Loader> : 
      <>
        <CoinView>
          <CoinViewItem>
            <span>Rank :</span>
            <span>{coData?.rank}</span>
          </CoinViewItem>
          <CoinViewItem>
            <span>Symbol :</span>
            <span>{coData?.symbol}</span>
          </CoinViewItem>
          <CoinViewItem>
            <span>Price:</span>
            <span>{prData?.quotes.USD.price.toFixed(2)}</span>
          </CoinViewItem>
        </CoinView>
        <CoinDescription>{coData?.description}</CoinDescription>
        <CoinView>
          <CoinViewItem>
            <span>Total Suply :</span>
            <span>{prData?.total_supply}</span>
          </CoinViewItem>
          <CoinViewItem>
            <span>Max Suply :</span>
            <span>{prData?.max_supply}</span>
          </CoinViewItem>
        </CoinView>
        <Outlet />
      </>
      }
      {/* url로 컨트롤 하고 싶을 때 네스트 라우터를 사용함 */}
      {/* 탭 만들어 보기(nested router를 사용하기에 그냥 link로 던지면 됨) */}
      <Tabs>
        <Tab isActive={chartMatch !== null}>
          <Link to={`/${coinId}/chart`}>
            Chart
          </Link>
        </Tab>
        <Tab isActive={priceMatch !== null}>
          <Link to={`/${coinId}/price`}>
            Price
          </Link>
        </Tab>
      </Tabs>
      <Routes>
        <Route path="chart" element={<Chart coinId={coinId}/>} />
        <Route path="price" element={<Price />} />
      </ Routes>
    </Container>
  )
}

export default Coin;