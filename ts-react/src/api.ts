// 이 함수는 json .data를 반환해줘야함 ->fetcher 함수는 promise여야함
import axios from "axios";
const BaseUrl = "https://api.coinpaprika.com/v1";
// 이건 함수형으로 해줘야함
export const fetchCoins = async() =>{
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  return await axios.get(`${BaseUrl}/coins`).then(
    (res) =>{
      return res.data;
    }
  )
}

// coin 화면 api
export const coinUrl = async(coinId:string) =>{
  return await axios.get(`${BaseUrl}/coins/${coinId}`).then(
    (res) =>{
      return res.data;
    }
  )
}
export const priceUrl = async(coinId:string) =>{
  return await axios.get(`${BaseUrl}/tickers/${coinId}`).then(
    (res) =>{
      return res.data;
    }
  )
}
export const chartCoin =async (coinId:string) => {
  return await axios.get(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`).then(
    (res) =>{
      return res.data;
    }
  )
}