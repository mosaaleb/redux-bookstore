// eslint-disable-next-line import/prefer-default-export
export const addBook = (book) => ({
  id: book.id,
  type: 'ADD_BOOK',
  title: book.title,
  category: book.category
});

export const removeBook = (id) => ({
  id,
  type: 'REMOVE_BOOK'
});
