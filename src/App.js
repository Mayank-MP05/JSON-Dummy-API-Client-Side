import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container className="App" maxWidth="lg" style={{ padding: "0px" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Container>
  );
}

export default App;
