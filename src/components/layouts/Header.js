import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const svgPath = () => {
    if (isOpen) {
      return (
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
      );
    }
    return <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />;
  };

  return (
    <header className="sm:flex sm:justify-between bg-white relative sm:static ">
      <div className="flex justify-between items-center p-3">
        <div>
          <a className="font-bold text-blue-600 text-xl" href="/">
            Bookstore CMS
          </a>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="block focus:outline-none text-blue-600 sm:hidden"
          >
            <svg className="h-6 w-6 fill-current">{svgPath()}</svg>
          </button>
        </div>
      </div>
      <div
        className={`px-2 absolute w-full bg-white shadow-lg rounded-b-lg ${
          isOpen ? 'block' : 'hidden'
        } sm:block sm:static sm:shadow-none sm:w-auto sm:flex sm:items-center sm:px-0`}
      >
        <a
          href="/"
          className="block mt-1 font-semibold p-1 px-1 rounded text-gray-700 hover:bg-gray-200 sm:px-1 sm:mx-5"
        >
          Books
        </a>
        <a
          href="/"
          className="block mt-1 font-semibold p-1 px-1 rounded text-gray-700 hover:bg-gray-200 sm:px-1 sm:mx-5"
        >
          Categories
        </a>
        <a
          href="/"
          className="block mt-1 font-semibold p-1 px-1 rounded text-blue-600 hover:bg-gray-200 sm:px-1 sm:mx-5 mb-3 sm:mb-0"
        >
          <svg className="block h-6 w-6 fill-current">
            <path d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm7.4-5.875a9 9 0 10-14.799 0C5.726 15.638 8.37 15 12 15c3.63 0 6.274.638 7.4 2.125zm-1.435 1.615C17.672 17.687 15.569 17 12 17c-3.57 0-5.672.687-5.965 1.74A8.966 8.966 0 0012 21a8.966 8.966 0 005.965-2.26zM12 15c-2.24 0-4-1.573-4-5 0-2.244 1.58-4 4-4 2.414 0 4 1.922 4 4.2 0 3.28-1.782 4.8-4 4.8zm-2-5c0 2.27.818 3 2 3 1.178 0 2-.702 2-2.8 0-1.25-.784-2.2-2-2.2-1.266 0-2 .816-2 2z" />
          </svg>
        </a>
      </div>
    </header>
  );
};
export default Header;
