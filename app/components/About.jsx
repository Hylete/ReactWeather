var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        Just a basic weather application for you lazy bums.
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
      </ol>
    </div>
  )
};

module.exports = About;
