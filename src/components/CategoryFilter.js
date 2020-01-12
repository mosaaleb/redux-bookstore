import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../actions/filterActions';

const CategoryFilter = ({ setFilter }) => {
  const booksCategories = [
    'All',
    'Kids',
    'Action',
    'Horror',
    'Sci-Fi',
    'History',
    'Learning',
    'Biography'
  ];

  return (
    <div className="p-1">
      <label htmlFor="book-category">
        Filter by Category
        <select
          id="book-category"
          className="border-2 block"
          onChange={(e) => setFilter(e.target.value)}
        >
          {booksCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

CategoryFilter.propTypes = {
  setFilter: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => {
    dispatch(setFilter(filter));
  }
});

export default connect(null, mapDispatchToProps)(CategoryFilter);
