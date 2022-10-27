import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      Tweet
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

ReactDOM.render(<Tweet />, document.querySelector('#root'));
