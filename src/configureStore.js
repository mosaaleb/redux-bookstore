import { createStore } from 'redux';
import appReducer from './reducers/index';
import Storage from './localStorage';

const configureStore = () => {
  const store = createStore(appReducer, Storage.loadState());

  store.subscribe(() => {
    Storage.saveState(store.getState());
  });

  return store;
};

export default configureStore;
