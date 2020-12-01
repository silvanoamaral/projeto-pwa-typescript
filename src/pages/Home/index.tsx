import React from "react";

import logo from "../../logo.svg";
import AcesssCamera from "../../components/AccessCamera";

function Home() {
  return (
    <>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        height="250px"
        width="250px"
      />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <p>PWA (Progressive Web Apps)</p>
      <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
      <AcesssCamera />
    </>
  );
}

export default Home;
