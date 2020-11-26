import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  background: #060303;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 2px 2px 0px #bbb;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 17px;
  }
`;

function NavBar() {
  return (
    <Box>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </Box>
  );
}

export default NavBar;
