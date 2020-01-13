import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../actions/bookActions';

const Book = ({ removeBook, book }) => (
  <div className="bg-white my-3 shadow p-3 rounded flex flex-col sm:flex-row sm:justify-between sm:p-8">
    <div className="mb-5 sm:mb-0">
      <div>
        <h2 className="font-montserrat font-bold text-xs text-gray-600">
          {book.category}
        </h2>
        <h2 className="font-bold text-xl text-gray-800">{book.title}</h2>
        <h2 className="text-sm text-blue-600">{book.author}</h2>
      </div>
      <div>
        <button
          type="button"
          onClick={() => removeBook(book.id)}
          className=" text-sm text-blue-600 hover:underline"
        >
          Remove
        </button>
        <span className="text-gray-400"> | </span>
        <button
          type="button"
          className=" text-sm text-blue-600 hover:underline"
        >
          Edit
        </button>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <CircularProgressbar
          value={book.progress}
          styles={
            (buildStyles({
              pathColor: '#3182ce'
            }),
            { root: { width: '25%' } })
          }
          className="mr-5"
        />
        <div className="font-montserrat">
          <h2 className="text-2xl leading-none">
            {book.progress}
            <span>%</span>
          </h2>
          <p className="text-xs text-gray-600">Completed</p>
        </div>
      </div>
      <div className="w-3/5">
        <button
          type="button"
          className="text-sm px-3 py-2 uppercase bg-blue-600 text-gray-100 rounded"
        >
          Update Progress
        </button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => {
    dispatch(removeBook(id));
  }
});

export default connect(null, mapDispatchToProps)(Book);
