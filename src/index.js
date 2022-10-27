import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Message />
        <Author />
        <Time />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/e839af16ed505a9ecba821461987356a"
      alt="avatar"
      className="avatar"
    />
  );
}

function Message() {
  return <div className="message">This is less than 140 characters</div>;
}

function Author() {
  return (
    <span className="author">
      <span className="name">Your name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

ReactDOM.render(<Tweet />, document.querySelector('#root'));
