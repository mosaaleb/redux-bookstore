import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

// TODO: extract filteredBooks into its own component (visibleBooks) with its dispatch
// filteredBooks > bookList > Book

const BookList = ({ books, filter }) => {
  const renderBook = (book) => <Book key={book.id} book={book} />;

  const filteredBooks = filter === 'All' ? books
    : books.filter((book) => book.category === filter);

  return (
    <div className="p-3 sm:w-4/5 sm:mx-auto sm:px-0 font-roboto">
      <div>{filteredBooks.map(renderBook)}</div>
    </div>
  );
};

BookList.propTypes = {
  filter: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter
});

export default connect(mapStateToProps)(BookList);
