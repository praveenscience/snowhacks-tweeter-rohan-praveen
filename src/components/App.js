import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Tweets from "./Tweets";
import User from "./User";
import { GetTweets } from "../services/TweetService";

class App extends Component {
  state = {
    CurrentUser: null,
    Tweets: []
  };
  componentDidMount() {
    this.UpdateTweets();
    setInterval(() => {
      this.UpdateTweets();
    }, 3000);
  }
  UpdateTweets = () => {
    GetTweets().then(res => {
      this.setState({ Tweets: res.data.data.tweets.reverse() });
    });
  };
  handleSignIn = CurrentUser => {
    this.setState({ CurrentUser });
  };
  render() {
    return (
      <div className="App">
        <Header className="Header justify-content-center" dark={true}>
          Tweetinator
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5">
              <User
                CurrentUser={this.state.CurrentUser}
                handleSignIn={this.handleSignIn}
                UpdateTweets={this.UpdateTweets}
              />
            </div>
            <div className="col-12 col-md-7">
              <Tweets tweets={this.state.Tweets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
