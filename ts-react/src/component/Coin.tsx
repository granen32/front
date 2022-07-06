import React ,{ useState,useEffect } from 'react';
import { useLocation, useParams,Routes,Route,Outlet } from 'react-router-dom';
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

interface coinIdProps{
  coinId : string;
}
interface locationProps {
  state:{
    name:string;
  }
}
interface coinData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface priceInfoData{
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const {coinId} = useParams<keyof coinIdProps>() as coinIdProps;
  const {state} = useLocation() as locationProps;
  const [coin, setCoin] = useState<coinData>();
  const [priceInfo, setpriceInfo] = useState<priceInfoData>();
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
      </>
      }
      {/* url로 컨트롤 하고 싶을 때 네스트 라우터를 사용함 */}
      
      <Routes>
        <Route path="price"  element={<Price/>}/>
        <Route path="chart" element={<Chart/>}/>
      </Routes>
      <Outlet />
    </Container>
  )
}

export default Coin;