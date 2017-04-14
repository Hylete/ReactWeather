var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        Just a basic weather application.
      </p>
      <p>
        Don't care about the weather?  Here are some external links you might find useful:
      </p>
      <ol>
        <li>
          <a href="https://reddit.com">Reddit</a> - News, memes, etc.
        </li>
        <li>
          <a href="https://google.com">Google</a> - Google is your best friend.
        </li>
        <li>
          <a href="https://slickdeals.net">Slickdeals</a> - Who doesn't like sales?
        </li>
        <li>
          <a href="https://facebook.com">Facebook</a> - For your social media needs.
        </li>
        <li>
          <a href="https://youtube.com">YouTube</a> - Popular video-sharing website.
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
