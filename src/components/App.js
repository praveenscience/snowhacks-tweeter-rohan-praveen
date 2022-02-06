import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header justify-content-center" dark={true}>
          Tweetinator
        </Header>
      </div>
    );
  }
}

export default App;
