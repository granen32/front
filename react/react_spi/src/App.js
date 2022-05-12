import React from 'react';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import NotFound from './component/NotFound';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';
// 리액트 라우터 돔은 리액트의 화면 전환을 도와주는 역할을 한다. 일반적인 웹에서 a태그를 이용해 다른 페이지로 이동했었다면, 리액트에서는 리액트 라우터를 통해서 link 태그를 사용하여 화면을 전환 한다. 리액트는 변화가 있는 컴포넌트만 업데이트 하여 효율적으로 성능을 관리하는 구조
//1. Link component에 to 속성을 활용하여 이동할 경로에 작성함
//2. 라우트 컴포넌트 path 속성을 link to 속성과 매핑 컴포넌트에 경로기술
//3. 새로 고침하면 경로 ㅂㅇ됨 이를 위해서는 세팅 필요
//4. 레거시한 익스에서는 안됨
//5. history api 를 활용하는데 이것이 무엇인교
//6. 리액트는 동적 페이지다 보니 ㄱㅊ
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DayList />}/>
        <Route path="/day/:day" element={<Day/>}/>
        {/* 스위치는 일치하는 처음 화면만 보이게됨*/}
        {/* 스위치란 path상 충돌이 일어나면 라우터들이 꺠지기 때문에 여기서 제일 처음 매칭되는 라우터만 선별하여 실행하기 때문에 충돌 오류를 잡아준다. */}
        {/* 404에러가 나와야할 emptypage */}
        <Route path="/create_world" element={<CreateWord/>}/>
        <Route path="/create_day" element={<CreateDay/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      {/* 다이나믹한 url을 하기 위해서는 : 콜론을 붙여넣으면됨 */}
    </div>
  </BrowserRouter>
  )
}

export default App;


// Creatd - Post
// Read - Get
// Update - Put
//  Delete - Delete