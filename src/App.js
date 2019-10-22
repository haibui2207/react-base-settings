import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ButtonDropdown from './components/base/ButtonDropdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <ButtonDropdown />
        {/* <Button color="primary" reverse>Confirm</Button>
        <Button color="secondary" reverse>Confirm</Button>
        <Button
          color="gradient"
          tag="a"
          href="https://codepen.io/electerious/pen/rroqdL"
          target="_blank"
          reverse
        >
          Confirm
        </Button> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
