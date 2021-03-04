import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder('/posts')
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data
  })
}
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder(`/users/${id}`)
  dispatch({
    type: 'FETCH_USER',
    payload: response.data
  })
}

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