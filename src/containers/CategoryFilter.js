import React, { useState } from 'react';

const CategoryFilter = () => {
  const [bookCategoryFilter, setBookCategoryFilter] = useState('');
  const booksCategories = [
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
          value={bookCategoryFilter}
          className="border-2 block"
          onChange={(e) => setBookCategoryFilter(e.target.value)}
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

export default CategoryFilter;
