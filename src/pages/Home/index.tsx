import React from "react";

import logo from "../../logo.svg";

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
    </>
  );
}

export default Home;
