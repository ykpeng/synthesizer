import { createStore } from 'redux';
import reducer from '../reducers/index';

const configureStore = (preloadedState = {}) => {
  createStore(
    reducer,
    preloadedState
  )
};

export default configureStore;
