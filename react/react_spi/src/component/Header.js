import React from 'react';
import { Link } from 'react-router-dom'
// header 인클루드 파일
export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">토익 영단어(고급)</Link>
      </h1>
      <div className="menu">
        <Link to="create_world" className="link">
          단어 추가
        </Link>
        <Link to="create_day" className="link">
          Day 추가
        </Link>
      </div>
    </div>
  );
}
