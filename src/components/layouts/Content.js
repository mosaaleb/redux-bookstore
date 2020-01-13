import React, { useState } from 'react';
import BookList from '../../containers/BookList';
import AddBookForm from '../../containers/AddBookForm';
import CategoryFilter from '../CategoryFilter';

const Content = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const form = () => {
    if (isFormVisible) {
      return <AddBookForm setIsFormVisible={setIsFormVisible} />;
    }
    return null;
  };

  return (
    <main className="flex-grow">
      <CategoryFilter />
      <BookList />
      {form()}
      <button
        type="button"
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="m-5 w-20 h-20 focus:outline-none text-blue-600 bg-gray-200 rounded-full shadow-xl text-5xl fixed bottom-0 right-0"
      >
        {isFormVisible ? '×' : '+'}
      </button>
    </main>
  );
};

export default Content;
