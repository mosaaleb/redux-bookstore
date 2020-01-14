// eslint-disable-next-line import/prefer-default-export
export const addBook = (book) => ({
  id: book.id,
  type: 'ADD_BOOK',
  title: book.title,
  author: book.author,
  category: book.category,
  progress: book.progress
});

export const removeBook = (id) => ({
  id,
  type: 'REMOVE_BOOK'
});
