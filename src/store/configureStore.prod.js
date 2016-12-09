/**
 * Created by rashad on 12/9/16.
 */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer, initialState, applyMiddleware(thunk)
  );
}
