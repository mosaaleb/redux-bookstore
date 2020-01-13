import React from 'react';
import BookList from '../../containers/BookList';
import AddBookForm from '../../containers/AddBookForm';
import CategoryFilter from '../CategoryFilter';

const Content = () => (
  <main className="flex-grow">
    <CategoryFilter />
    <BookList />
    <AddBookForm />
  </main>
);

export default Content;
