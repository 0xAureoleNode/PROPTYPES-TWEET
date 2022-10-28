import React from 'react';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import { createRoot } from 'react-dom/client';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} alt="avatar" className="avatar" />;
}

Avatar.propTypes = {
  hash: PropTypes.string.isRequired,
};

function Message({ text }) {
  return <div className="message">{text}</div>;
}

Message.propTypes = {
  text: PropTypes.string,
};

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string,
};

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet">{getRetweetCount(count)}</i>
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number,
};

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

LikeButton.propTypes = {
  count: PropTypes.number,
};

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
  message: 'run',
  gravatar: 'e839af16ed505a9ecba821461987356a',
  author: {
    handle: 'aureole',
    name: 'Han-Aureole',
  },
  likes: 8,
  retweets: 2,
  timestamp: '2022-10-27 21:24:37',
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Tweet tweet={testTweet} />);
