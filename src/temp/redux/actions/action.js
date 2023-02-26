export const GET_LIST_RESOURCE = 'GET_LIST_RESOURCE';

export const getListResource = url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_LIST_RESOURCE,
        payload: data
      })
    );
};

export const createPost = (post) => {
  return (dispatch) => {
    dispatch({ type: 'CREATE_POST_START' });
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'CREATE_POST_SUCCESS', payload: response });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_POST_ERROR', payload: error });
      });
  };
};
