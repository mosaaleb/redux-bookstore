import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import { addBook } from '../actions/bookActions';

// TODO: reset filter when filter is choosen when adding book

const AddBookForm = ({ addBook, setIsFormVisible }) => {
  const [bookTitleInput, setBookTitleInput] = useState('');
  const [bookAuthorInput, setBookAuthorInput] = useState('');
  const [bookCategoryInput, setBookCategoryInput] = useState('');
  const booksCategories = [
    'Kids',
    'Action',
    'Horror',
    'Sci-Fi',
    'History',
    'Learning',
    'Biography'
  ];

  const handleAddBook = () => {
    addBook({
      id: uuid(),
      title: bookTitleInput,
      author: bookAuthorInput,
      category: bookCategoryInput,
      progress: '0'
    });

    setBookTitleInput('');
    setBookCategoryInput('');
    setIsFormVisible(false);
  };

  return (
    <div className="fixed right-0 top-0 bg-smoke-light w-full h-full flex justify-center items-center font-roboto">
      <div className="p-8 bg-white max-w-md m-auto rounded flex flex-col justify-between h-64">
        <input
          type="text"
          value={bookTitleInput}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Book title"
          onChange={(e) => setBookTitleInput(e.target.value)}
        />

        <input
          type="text"
          value={bookAuthorInput}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Book author"
          onChange={(e) => setBookAuthorInput(e.target.value)}
        />

        <select
          value={bookCategoryInput}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={(e) => setBookCategoryInput(e.target.value)}
        >
          <option value="default" hidden="hidden">
            Choose Category
          </option>
          {booksCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button
          type="button"
          className="text-sm px-3 py-2 uppercase bg-blue-600 text-gray-100 rounded"
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

AddBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  setIsFormVisible: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(addBook(book));
  }
});

export default connect(null, mapDispatchToProps)(AddBookForm);
