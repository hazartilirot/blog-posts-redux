import _ from "lodash";
import jsonPlaceholder from "../api/jsonPlaceholder";


/*
- Whenever an action creator is called from inside of another action creator we
need to make sure to dispatch the result of it
- getState we get as a result of fetching data and then dispatching it
- Notice await is used in fetching posts, but isn't in case of getting a user.
To fetch a user we need to get a posts list first though we don't have logic 
relating to a user so we don't need to await.*/
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
    
  _.chain(getState().posts)
      .map('userId')
      .uniq()
      .forEach(id => dispatch(fetchUser(id)))
      .value()
};
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder(`/users/${id}`);
  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};

/*MIND the syntax for fetching data is incorrect.
  const response = await jsonPlaceholder.get('/posts')
  
  return {
    type: 'FETCH_POSTS',
    payload: response
  }
  By the time fetchPost action is going to be
  dispatched to Reducers it should be a plain object in nature as it turned out
  what it gets is unresolved response of jsonPlaceholder.get('/posts')
  Now the Redux Cycle would look like this:
  Action Creator => Action => dispatch => MIDDLEWARE => Reducers => State
  We return a function with a dispatch argument to ReduxThunk*/
