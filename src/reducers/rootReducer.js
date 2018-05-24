import {combineReducers} from 'redux';
import FetchUsers from './fetchUsers';

const rootReducer = combineReducers({
  users: FetchUsers
})

export default rootReducer;
