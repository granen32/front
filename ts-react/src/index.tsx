import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 스타일드 컴포넌트
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./theme";
// 리액트 쿼리
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
