import uuid from 'uuid/v1';

const initState = [
  {
    id: uuid(),
    title: 'Mickey magazine',
    category: 'Kids'
  },
  {
    id: uuid(),
    title: 'Dracula',
    category: 'Horror'
  },
  {
    id: uuid(),
    title: 'Malcolm X',
    category: 'Biography'
  },
  {
    id: uuid(),
    title: 'Stormbreaker',
    category: 'Action'
  },
  {
    id: uuid(),
    title: 'Voices from Chernobyl',
    category: 'History'
  },
  {
    id: uuid(),
    title: 'Deep Learning',
    category: 'Learning'
  },
  {
    id: uuid(),
    title: '1984',
    category: 'Sci-Fi'
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
