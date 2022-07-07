// 이 함수는 json .data를 반환해줘야함 ->fetcher 함수는 promise여야함
import axios from "axios";
// 이건 함수형으로 해줘야함
export const fetchCoins = async() =>{
  // 데이터 얻는법
  // axios.get(url).then(res => console.log(res.data))
  return await axios.get("https://api.coinpaprika.com/v1/coins").then(
    (res) =>{
      console.log("Response from hook", res.data);
      return res.data;
    }
  )
}