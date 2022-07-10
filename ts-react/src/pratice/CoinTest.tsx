import React ,{ 
  useState,
  useEffect
} from 'react';
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
import axios  from 'axios';
import Price from '../pages/Price';
import Chart from '../pages/Chart';

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
  const [loading, setLoading] = useState(true);
  const {coinId} = useParams<keyof coinIdProps>() as coinIdProps;
  const {state} = useLocation() as locationProps;
  const [coin, setCoin] = useState<coinData>();
  const [priceInfo, setpriceInfo] = useState<priceInfoData>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  // usematch 를 사용하게 되면 해당 항목이 있을 경우 객체값을 받게됨
  // 컴포넌트가 생성될 때 한번만 코드 실행 === useEffect
  const getCoin = async() =>{
    const coinData = await axios(`https://api.coinpaprika.com/v1/coins/${coinId}`);
    const priceData = await axios(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
    setCoin(coinData.data);
    setpriceInfo(priceData.data);
    setLoading(false);
  };
  useEffect(() =>{
    getCoin();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name  ? state.name : loading ? " loading...!" : priceInfo?.name}</Title>
      </Header>
      {loading ? <Loader>Loading...{coinId}</Loader> : 
      <>
        <CoinView>
          <CoinViewItem>
            <span>Rank :</span>
            <span>{coin?.rank}</span>
          </CoinViewItem>
          <CoinViewItem>
            <span>Symbol :</span>
            <span>{coin?.symbol}</span>
          </CoinViewItem>
          <CoinViewItem>
            <span>Open Source:</span>
            <span>{coin?.open_source ? "yes" : "no"}</span>
          </CoinViewItem>
        </CoinView>
        <CoinDescription>{coin?.description}</CoinDescription>
        <CoinView>
          <CoinViewItem>
            <span>Total Suply :</span>
            <span>{priceInfo?.total_supply}</span>
          </CoinViewItem>
          <CoinViewItem>
            <span>Max Suply :</span>
            <span>{priceInfo?.max_supply}</span>
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