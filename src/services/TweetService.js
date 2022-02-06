import Axios from "axios";

export const GetTweets = () =>
  Axios.get("https://tweet-api-clone.herokuapp.com/api/v1/tweets");

export const PostTweet = data =>
  Axios.post("https://tweet-api-clone.herokuapp.com/api/v1/tweet", data);
