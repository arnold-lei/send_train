import {createStore, combineReducers} from 'redux';
import climbReducer from './reducers/climbs'

const rootReducer = combineReducers({
  climbs: climbReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore; 