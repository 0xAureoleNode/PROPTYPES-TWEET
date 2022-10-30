import Tweet from './Tweet';

const Tweets = ({ tweets }) => (
  <>
    {tweets.map((tweet) => (
      <Tweet key={tweet.id} tweet={tweet} />
    ))}
  </>
);

export default Tweets;
