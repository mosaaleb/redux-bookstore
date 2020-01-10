import uuid from 'uuid/v1';

const initState = {
  books: [
    {
      id: uuid(),
      title: 'Animal Farm',
      category: 'Satire'
    },
    {
      id: uuid(),
      title: 'The Great Gatsby',
      category: 'Biography'
    }
  ]
};
const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [
          ...state.books,
          {
            id: action.id,
            title: action.title,
            category: action.category
          }
        ]
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => (book.id !== action.id))
      };
    default:
      return state;
  }
};

export default bookReducer;
