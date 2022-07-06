import { BrowserRouter,Routes,Route } from "react-router-dom";
import Coins from "./pages/Coins";
import Coin from "./component/Coin";
import Price from "./pages/Price";
import Chart from "./pages/Chart";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
         {/* 기존 스위치 */}
        <Route path="/" element={<Coins/>} />
        <Route path="/:coinId/*" element={<Coin/>} />
        {/* :id 는 파라매터를 붙여주는 거다. */}
        <Route path="/price"  element={<Price/>}/>
        <Route path="chart" element={<Chart/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default Router