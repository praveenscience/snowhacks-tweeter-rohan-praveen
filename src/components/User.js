import { useState } from "react";
import { PostTweet } from "../services/TweetService";
import FormGroup from "./Bootstrap/FormGroup";

const User = ({ CurrentUser, handleSignIn }) => {
  // author":"Praveen Kumar","authorEmail":"youtube@praveen.science","authorImg
  const [author, setAuthor] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const [tweetMessage, setTweet] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    handleSignIn({ author, authorEmail, authorImg });
  };
  const handleSendTweet = e => {
    e.preventDefault();
    PostTweet({ ...CurrentUser, tweetMessage }).then(() => {
      setTweet("");
    });
  };
  return (
    <div className="User">
      {CurrentUser ? (
        <form onSubmit={handleSendTweet}>
          <div className="media">
            <img
              src={CurrentUser.authorImg}
              className="mr-3 border rounded p-1"
              width={100}
              alt={CurrentUser.author}
            />
            <div className="media-body">
              <h5 className="mt-0">{CurrentUser.author}</h5>
              <textarea
                className="form-control mb-3"
                placeholder="Say Something..."
                value={tweetMessage}
                onChange={e => {
                  setTweet(e.target.value);
                }}
              />
              <input type="submit" value="Tweet" className="btn btn-primary" />
            </div>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormGroup
            Label="Name"
            Value={author}
            onChange={e => {
              setAuthor(e.target.value);
            }}
          />
          <FormGroup
            Label="Email"
            Value={authorEmail}
            onChange={e => {
              setAuthorEmail(e.target.value);
            }}
          />
          <FormGroup
            Label="Avatar"
            Value={authorImg}
            onChange={e => {
              setAuthorImg(e.target.value);
            }}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Save"
            disabled={
              author.trim().length < 4 ||
              !/\S+@\S+\.\S+/.test(authorEmail.trim()) ||
              authorImg.trim().length < 10
            }
          />
        </form>
      )}
    </div>
  );
};

export default User;
