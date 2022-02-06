import { useState } from "react";
import FormGroup from "./Bootstrap/FormGroup";

const User = ({ CurrentUser, handleSignIn }) => {
  // author":"Praveen Kumar","authorEmail":"youtube@praveen.science","authorImg
  const [author, setAuthor] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    handleSignIn({ author, authorEmail, authorImg });
  };
  return (
    <div className="User">
      {CurrentUser ? (
        "Logged In"
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
