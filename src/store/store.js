import { createStore, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from './localStorage';

import rootReducer from './reducers';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middlewares))
);
store.subscribe(() => {
  saveState(store.getState());
});
export default store;
