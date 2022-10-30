function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} alt="avatar" className="avatar" />;
}

export default Avatar;
