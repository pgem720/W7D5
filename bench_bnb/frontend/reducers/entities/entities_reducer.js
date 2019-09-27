import { combinedReducers } from './redux';
import usersReducer from './users_reducer';

export default combinedReducers ({
  users: usersReducer
})
