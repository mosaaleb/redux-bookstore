import uuid from 'uuid/v1';

const initState = {
  books: [
    {
      id: uuid(),
      title: 'one',
      category: 'one Category'
    },
    {
      id: uuid(),
      title: 'two',
      category: 'two Category'
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
    default:
      return state;
  }
};

export default bookReducer;
