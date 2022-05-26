
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  const [conins, setCoins] = useState([]);
  // coin
  const [coninValue, setconinValue] = useState(1);
  const [selectCoin ,setselectCoin] = useState(1);
  useEffect(() =>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
      // 여기서 로딩이 false 인 이유는 그래야 json이 나오니까다
    });
    /* fetch 함수는 자바스크립트를 사용하면 필요할 때 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있다.
    http 요청에 최적화 되어 있고 상태도 잘 추상화되어 있고, promise 를 기반으로 되어 있기 때문에 다른 로직을 추가하고 처리할 수 있다. 네트워크 요청은 보통 3가지로 이루어 져 있다. 
    1. 주문전송
    2. 사용자 정보 읽기
    3. 서버에서 최신 변경문 가져오기
     */
    // tickers request 한걸 알수있다.
  }, []);
  // 함수형
  const coinonChange = (event) =>{
    setconinValue(event.target.value);
    setselectCoin(1);
  }
  const inputHandle = (event) =>{
    setselectCoin(event.target.value);
  }
  return (
    <>
      <h1>The Coins! {conins.length}</h1>
      {loading ? <strong>Loading...</strong> : 
      (
      <>
        <select onChange={coinonChange}>
          {conins.map((coin) => <option key={coin.quotes.USD.price} value={coin.rank}>{coin.name}(${coin.symbol}){coin.quotes.USD.price}</option>)}
        </select>
        <h2>coin convert</h2>
        <input type="number" onChange={inputHandle} value={selectCoin}  placeholder="coin"/>
        <h3>coin cost {selectCoin/coninValue}</h3>
      </>
      )}

    </>
  );
}

export default App;
