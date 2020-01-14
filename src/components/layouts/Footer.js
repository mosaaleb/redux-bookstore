import React from 'react';

const Footer = () => (
  <div className="font-roboto text-gray-100 bg-gray-800 h-16 flex items-center justify-center">
    <div>
      <h2>
        Made with
        <span className="text-red-600 text-2xl"> &hearts; </span>
        by
        <a
          href="https://github.com/mosaaleb/"
          className="border-b-2 hover:text-blue-500 hover:border-blue-500"
        >
          {' '}
          Muhammad
        </a>
      </h2>
    </div>
  </div>
);

export default Footer;
