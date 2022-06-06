import React from "react";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
// import Coinlst from './pages/Coinlst';
// import Main from './pages/Main';
import ChromeTodo from "./pages/ChromeTodo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// BrowserRouter 는 보통 라우터처럼 나옴 hash 같은 경우 #이 붙어서 나옴
function App() {
  return (
  <Router>
    <Routes>
      {/* 기존 스위치 */}
      {/* <Route path="/" element={<Main/>} /> */}
      <Route path="/movie/:id" element={<Detail/>} />
      {/* :id 는 파라매터를 붙여주는 거다. */}
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home/>} />
      {/* <Route path="/coinlist" element={<Coinlst/>} /> */}
      <Route path={"/ChromeTodo"} element={<ChromeTodo/>} />
    </Routes>
  </Router>
  );
}


export default App;
