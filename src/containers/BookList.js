import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = (state) => ({ books: state.bookReducer.books });

const BookList = ({ books }) => {
  const renderBook = (book) => <Book key={book.id} book={book} />;

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Id</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Category</th>
        </tr>
      </thead>
      <tbody>{books.map(renderBook)}</tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(BookList);
