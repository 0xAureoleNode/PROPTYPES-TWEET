import React from 'react';
import './index.css';
import Tweets from './Components/Tweets';
import { createRoot } from 'react-dom/client';

const testTweet = [
  {
    id: 1,
    message: '我管这个叫',
    gravatar: 'e839af16ed505a9ecba821461987356a',
    author: {
      handle: 'aureole',
      name: 'Han-Aureole',
    },
    likes: 8,
    retweets: 2,
    timestamp: '2022-10-27 21:24:37',
  },
  {
    id: 2,
    message: '0元润',
    gravatar: 'e839af16ed505a9ecba821461987356a',
    author: {
      handle: 'aureole',
      name: 'Han-Aureole',
    },
    likes: 1,
    retweets: 0,
    timestamp: '2022-10-29 21:24:37',
  },
  {
    id: 3,
    message: '寄！！！',
    gravatar: 'e839af16ed505a9ecba821461987356a',
    author: {
      handle: 'aureole',
      name: 'Han-Aureole',
    },
    likes: 80,
    retweets: 200,
    timestamp: '2022-10-25 21:24:37',
  },
];

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Tweets tweets={testTweet} />);
