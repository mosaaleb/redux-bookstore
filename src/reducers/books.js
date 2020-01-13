import uuid from 'uuid/v1';

const initState = [
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
];

const books = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
