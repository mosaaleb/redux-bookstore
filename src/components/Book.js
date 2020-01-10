import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => {
    dispatch({
      id,
      type: 'REMOVE_BOOK'
    });
  }
});

const Book = ({ removeBook, book }) => (
  <tr>
    <td className="border px-4 py-2">{book.id}</td>
    <td className="border px-4 py-2">{book.title}</td>
    <td className="border px-4 py-2">{book.category}</td>
    <td className="border px-4 py-2">
      <button type="button" onClick={() => removeBook(book.id)}>
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Book);
