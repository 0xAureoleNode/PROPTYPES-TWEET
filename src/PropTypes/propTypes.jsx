import PropTypes from 'prop-types';

// import Tweet from
import Tweet from '../Components/index.js';
import Avatar from '../Components/Avatar';
import Message from '../Components/Message';
import Author from '../Components/Author';
import Time from '../Components/Time';
import RetweetButton from '../Components/RetweetButton';
import LikeButton from '../Components/LikeButton';

Tweet.propTypes = {
  tweet: PropTypes.object.isRequired,
};

Avatar.propTypes = {
  hash: PropTypes.string.isRequired,
};

Message.propTypes = {
  text: PropTypes.string,
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
  }).isRequired,
};

Time.propTypes = {
  time: PropTypes.string,
};

RetweetButton.propTypes = {
  count: PropTypes.number,
};

LikeButton.propTypes = {
  count: PropTypes.number,
};
