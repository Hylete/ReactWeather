var React = require('react');
var {Link} = require('react-router')

var Examples = (props) => {
  return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>For those who don't feel like typing:</p>
        <ol>
          <li>
            <Link to='/?location=Arcadia'>Arcadia, California</Link>
          </li>
          <li>
            <Link to='/?location=Irvine'>Irvine, California</Link>
          </li>
          <li>
            <Link to='/?location=Las Vegas'>Las Vegas, Nevada</Link>
          </li>
          <li>
            <Link to='/?location=Los Angeles'>Los Angeles, California</Link>
          </li>
          <li>
            <Link to='/?location=New York City'>New York City, New York</Link>
          </li>
          <li>
            <Link to='/?location=San Francisco'>San Francisco, California</Link>
          </li>
          <li>
            <Link to='/?location=San Gabriel'>San Gabriel, California</Link>
          </li>
          <li>
            <Link to='/?location=Seattle'>Seattle, Washington</Link>
          </li>
        </ol>
      </div>
  )
};

module.exports = Examples;
