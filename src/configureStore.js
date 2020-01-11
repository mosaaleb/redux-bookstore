import { createStore } from 'redux';
import appReducer from './reducers/index';
import Storage from './localStorage';

const configureStore = () => {
  const store = createStore(appReducer, Storage.loadState());

  store.subscribe(() => {
    Storage.saveState({ books: store.getState().books });
  });

  return store;
};

export default configureStore;
