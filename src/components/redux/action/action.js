//import axios
import axios from 'axios';
import { FETCH_POSTS_REQUEST } from './actionTypes';
import { FETCH_POSTS_SUCCESS } from './actionTypes';
import { FETCH_POSTS_ERROR } from './actionTypes';

//define action creator

 const fetchPostsRequest = () => {
    return {
      type: FETCH_POSTS_REQUEST
    }
  }
  
 const fetchPostsSuccess = (posts) => {
    return {
      type: FETCH_POSTS_SUCCESS,
      payload: posts
    }
  }
  
 const fetchPostsError = (error) => {
    return {
      type: FETCH_POSTS_ERROR,
      payload: error
    }
  }
  
  //export thunk action creator
  export const fetchPosts = (offset, limit) => {
    return (dispatch) => {
      dispatch(fetchPostsRequest());
      axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=${limit}`)
        .then(response => {
          const posts = response.data;
          dispatch(fetchPostsSuccess(posts));
        })
        .catch(error => {
          const errorMsg = error.message;
          dispatch(fetchPostsError(errorMsg));
        })
    }
  }

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
          alert("Sucessfully Created New Post")
        })
        .catch(error => {
          dispatch({ type: 'CREATE_POST_ERROR', payload: error });
        });

        console.log(JSON.stringify(post), "body")
    };
  };

  //action 
export const updatePost = (postId, post) => {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_POST_START' });
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'UPDATE_POST_SUCCESS', payload: response });
        dispatch(fetchPosts(response.start, response.limit));
      })
      .catch(error => {
        dispatch({ type: 'UPDATE_POST_ERROR', payload: error });
      });
      console.log(JSON.stringify(post), "updatepost")
  };
};

//action 
export const deletePost = (postId) => {
  return (dispatch) => {
    dispatch({ type: 'DELETE_POST_START' });
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(response => {
        dispatch({ type: 'DELETE_POST_SUCCESS', payload: response });
        dispatch(fetchPosts(response.start, response.limit));
      })
      .catch(error => {
        dispatch({ type: 'DELETE_POST_ERROR', payload: error });
      });
  };
};