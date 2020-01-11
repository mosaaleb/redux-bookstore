import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => {
    dispatch({
      filter,
      type: 'CHANGE_FILTER'
    });
  }
});

const CategoryFilter = ({ setFilter }) => {
  const booksCategories = [
    'Kids',
    'Action',
    'Horror',
    'Sci-Fi',
    'History',
    'Learning',
    'Biography'
  ];

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="p-1">
      <label htmlFor="book-category">
        Filter by Category
        <select
          id="book-category"
          className="border-2 block"
          onChange={handleFilter}
        >
          <option value="default" hidden="hidden">
            Choose Filter
          </option>
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

export default connect(null, mapDispatchToProps)(CategoryFilter);
