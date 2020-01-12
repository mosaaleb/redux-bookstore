import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import { addBook } from '../actions/bookActions';

// TODO: reset filter when filter is choosen when adding book

const AddBookForm = ({ addBook }) => {
  const [bookTitleInput, setBookTitleInput] = useState('');
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
      category: bookCategoryInput
    });

    setBookTitleInput('');
    setBookCategoryInput('');
  };

  return (
    <div>
      <div className="p-1">
        <label htmlFor="book-name">
          Book Name
          <input
            type="text"
            value={bookTitleInput}
            id="book-name"
            className="border-2 block"
            onChange={(e) => setBookTitleInput(e.target.value)}
          />
        </label>
      </div>
      <div className="p-1">
        <label htmlFor="book-category">
          Book Category
          <select
            id="book-category"
            value={bookCategoryInput}
            className="border-2 block"
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
        </label>
      </div>
      <div className="p-1">
        <button type="button" className="border-2" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
    </div>
  );
};

AddBookForm.propTypes = {
  addBook: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(addBook(book));
  }
});

export default connect(null, mapDispatchToProps)(AddBookForm);
