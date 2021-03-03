import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async dispatch => dispatch({
  type: 'FETCH_POSTS', 
  payload: await jsonPlaceholder('/posts')
})

/*MIND the syntax for fetching data is incorrect.
  const response = await jsonPlaceholder.get('/posts')
  
  return {
    type: 'FETCH_POSTS',
    payload: response
  }
  By the time fetchPost action is going to be
  dispatched to Reducers it should be a plain object in nature as it turned out
  what it gets is unresolved response of jsonPlaceholder.get('/posts')
  Now the Redux Cycle would like like this:
  Action Creator => Action => dispatch => MIDDLEWARE => Reducers => State
  We return a function with a dispatch argument to ReduxThunk*/