import {combineReducers} from "redux";
import postsReducer from "./postsReducer"
import usersReducer from "./usersReducer";

/*NOTE if you don't know yet what your reducers are just pass an empty object
* or set a placeholder as a temporary workaround to prevent an error*/
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});