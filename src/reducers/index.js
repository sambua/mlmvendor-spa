/**
 * Created by rashad on 12/9/16.
 */
import { combineReducers } from 'redux';
import items from './itemReducer';

const rootReducer = combineReducers({
  items
});

export default rootReducer;
