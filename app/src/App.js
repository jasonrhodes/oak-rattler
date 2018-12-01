import React, { Component } from "react";
import "./App.css";
import { Button } from "oak-branch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button>A bigly padded button, I hope</Button>
        </header>
      </div>
    );
  }
}

export default App;
