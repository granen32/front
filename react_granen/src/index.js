import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

const darkTheme = {
  textColor : "whitesmoke",
  backgroundColor : "#111",
  // props에 컬러 값을 할당해줌
}
const lightTheme = {
  textColor : "#111",
  backgroundColor : "whitesmoke",
  // props에 컬러 값을 할당해줌
}
// 부모요소의 props들을 이제 페이지 마다 컴포넌트들이 접근이 가능해짐
// 테마 별로 다크모드 <-> 라이트 모드를 만들어둠
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
