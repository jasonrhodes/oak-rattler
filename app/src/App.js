import React, { Component } from "react";
import "./App.css";
import { Button } from "oak-branch";
import { two } from "shaky";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button>A bigly padded button, I hope</Button>
          <p>Number: {two()}</p>
        </header>
      </div>
    );
  }
}

export default App;
