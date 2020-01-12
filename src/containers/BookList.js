import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import CategoryFilter from './CategoryFilter';

// TODO: extract filteredBooks into its own component (visibleBooks) with its dispatch
// filteredBooks > bookList > Book

const BookList = ({ books, filter }) => {
  const renderBook = (book) => <Book key={book.id} book={book} />;

  const filteredBooks = filter === 'All' ? books
    : books.filter((book) => book.category === filter);

  return (
    <div>
      <CategoryFilter />
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>{filteredBooks.map(renderBook)}</tbody>
      </table>
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
