import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Tweets from "./Tweets";
import User from "./User";

class App extends Component {
  state = {
    CurrentUser: null
  };
  render() {
    return (
      <div className="App">
        <Header className="Header justify-content-center" dark={true}>
          Tweetinator
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <User CurrentUser={this.state.CurrentUser} />
            </div>
            <div className="col-12 col-md-9">
              <Tweets />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
