import uuid from 'uuid/v1';

const initState = [
  {
    id: uuid(),
    title: 'Mickey magazine',
    category: 'Kids',
    author: '‎Walt Disney‎',
    progress: '76'
  },
  {
    id: uuid(),
    title: 'Dracula',
    category: 'Horror',
    author: 'Bram Stoker',
    progress: '27'
  },
  {
    id: uuid(),
    title: 'The Autobiography of Malcolm X',
    category: 'Biography',
    author: 'Malcolm X',
    progress: '89'
  },
  {
    id: uuid(),
    title: 'Stormbreaker',
    category: 'Action',
    author: 'Anthony Horowitz',
    progress: '96'
  },
  {
    id: uuid(),
    title: 'Voices from Chernobyl',
    category: 'History',
    author: 'Svetlana Alexievich',
    progress: '23'
  },
  {
    id: uuid(),
    title: 'Practical Object-Oriented Design in Ruby: An Agile Primer',
    category: 'Learning',
    author: 'Sandi Metz',
    progress: '56'
  },
  {
    id: uuid(),
    title: '1984',
    category: 'Sci-Fi',
    author: 'George Orwell',
    progress: '48'
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
          author: action.author,
          category: action.category,
          progress: action.progress
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
