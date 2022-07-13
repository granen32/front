import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
const NaviHome = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 20px;
  top: 20px;
  > button{
    width: 50px;
    height: 50px;
    border-radius: 15px;
    background-color: #222;
    margin-bottom:10px;
    color: #fff;
    text-align: center;
  }
`;
export const Navigation = () => {
  const navigate = useNavigate();
  const onclickGohome = () =>{
    navigate(-1);
  }
  const onclickGoback = () =>{
    navigate("/");
  }
  return (
    <NaviHome>
      <button name="go" onClick={onclickGohome}>Home</button>
      <button name="back" onClick={onclickGoback}>Back</button>
    </NaviHome>
  )
}

export default Navigation