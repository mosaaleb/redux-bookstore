import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch({
      id: book.id,
      type: 'ADD_BOOK',
      title: book.title,
      category: book.category
    });
  }
});


const AddBookForm = ({ addBook }) => {
  const [bookNameInput, setBookNameInput] = useState('');
  const [bookCategoryInput, setBookCategoryInput] = useState('');

  const handleAddBook = () => {
    addBook({
      id: uuid(),
      title: bookNameInput,
      category: bookCategoryInput
    });

    setBookNameInput('');
    setBookCategoryInput('');
  };

  return (
    <div>
      <div className="p-1">
        <label htmlFor="book-name">
          Book Name
          <input
            type="text"
            value={bookNameInput}
            id="book-name"
            className="border-2 block"
            onChange={(e) => setBookNameInput(e.target.value)}
          />
        </label>

      </div>
      <div className="p-1">
        <label htmlFor="book-category">
          Book Category
          <input
            type="text"
            value={bookCategoryInput}
            id="book-category"
            className="border-2 block"
            onChange={(e) => setBookCategoryInput(e.target.value)}
          />
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

export default connect(null, mapDispatchToProps)(AddBookForm);
