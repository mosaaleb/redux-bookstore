import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../actions/filterActions';

const CategoryFilter = ({ filter, setFilter }) => {
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
    <div className="mt-3 p-3 sm:w-4/5 sm:mx-auto sm:px-0 font-roboto">
      <div>
        Filters
        <div>
          {booksCategories.map((category) => (
            <button
              type="button"
              value={category}
              key={category}
              onClick={(e) => setFilter(e.target.value)}
              className={`py-1 px-3 my-1 mr-1 text-gray-100 rounded-full text-sm font-montserrat focus:outline-none ${
                filter === category ? 'bg-blue-800' : 'bg-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => {
    dispatch(setFilter(filter));
  }
});

const mapStateToProps = (state) => ({
  filter: state.filter
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
