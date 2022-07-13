import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coins from "../pages/Coins";
import Coin from "../component/Coin";
import Navigation from './Navigation';
const Routers = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          {/* 기존 스위치 */}
          <Route path="/" element={<Coins/>} />
          <Route path="/:coinId/*" element={<Coin/>} />
          {/* :id 는 파라매터를 붙여주는 거다. */}
        </Routes>
      </Router>
    </>
  )
}

export default Routers