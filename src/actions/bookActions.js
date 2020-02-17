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

export const updateBookProgress = (id, progress) => ({
  id,
  progress,
  type: 'UPDATE_BOOK_PROGRESS'
});
