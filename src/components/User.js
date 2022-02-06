import { useState } from "react";

const User = ({ CurrentUser }) => {
  // author":"Praveen Kumar","authorEmail":"youtube@praveen.science","authorImg
  const [author, setAuthor] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  return (
    <div className="User">
      {CurrentUser ? (
        "Logged In"
      ) : (
        <form action="">
          <p>Form lies here...</p>
        </form>
      )}
    </div>
  );
};

export default User;
