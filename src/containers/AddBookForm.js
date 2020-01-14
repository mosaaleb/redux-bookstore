import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import { addBook } from '../actions/bookActions';
import validateInput from '../validations/newBook';

// TODO: reset filter when filter is choosen when adding book

const AddBookForm = ({ addBook, setIsFormVisible }) => {
  const [bookTitleInput, setBookTitleInput] = useState('');
  const [bookAuthorInput, setBookAuthorInput] = useState('');
  const [bookCategoryInput, setBookCategoryInput] = useState('');

  const [validations, setValidations] = useState({ errors: {}, isValid: true });

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
    const { errors, isValid } = validateInput(
      bookTitleInput,
      bookAuthorInput,
      bookCategoryInput
    );
    if (isValid) {
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
    } else {
      setValidations({ errors, isValid });
    }
  };

  return (
    <div className="fixed right-0 top-0 bg-smoke-light w-full h-full flex justify-center items-center font-roboto">
      <div className="p-8 bg-white rounded flex flex-col justify-between w-4/5">
        <div className="my-4">
          <input
            type="text"
            value={bookTitleInput}
            placeholder="Book title"
            onChange={(e) => setBookTitleInput(e.target.value)}
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {validations.isValid ? null : (
            <p className="text-red-500 text-sm">{validations.errors.title}</p>
          )}
        </div>

        <div className="my-4">
          <input
            type="text"
            value={bookAuthorInput}
            placeholder="Book author"
            onChange={(e) => setBookAuthorInput(e.target.value)}
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {validations.isValid ? null : (
            <p className="text-red-500 text-sm">{validations.errors.author}</p>
          )}
        </div>

        <div className="my-4">
          <select
            value={bookCategoryInput}
            onChange={(e) => setBookCategoryInput(e.target.value)}
            className="w-full block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          {validations.isValid ? null : (
            <p className="text-red-500 text-sm">{validations.errors.category}</p>
          )}
        </div>

        <div className="my-4">
          <button
            type="button"
            onClick={handleAddBook}
            className="w-full text-sm px-3 py-2 uppercase bg-blue-600 text-gray-100 rounded"
          >
            Add Book
          </button>
        </div>
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
