import React from 'react';
import './index.css';
import Tweet from './Components/Tweet';

import { createRoot } from 'react-dom/client';

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
