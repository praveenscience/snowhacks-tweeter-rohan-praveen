const Tweets = ({ tweets }) => {
  return (
    <div className="Tweets">
      {tweets && tweets.length > 0 ? (
        tweets.map(tweet => (
          <div className="media border p-2 rounded mb-2" key={tweet._id}>
            <img
              src={tweet.authorImg}
              className="mr-2 border rounded p-1"
              width={75}
              alt={tweet.author}
            />
            <div className="media-body">
              <h5 className="mt-0 mb-1">{tweet.author}</h5>
              <p className="my-0">{tweet.tweetMessage}</p>
            </div>
          </div>
        ))
      ) : (
        <img src="https://i.imgur.com/JaGdvbt.png" alt="No Tweets Found" />
      )}
    </div>
  );
};

export default Tweets;
