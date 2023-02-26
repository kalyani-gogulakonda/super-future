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
          // let pageNumbers = []
          // for (let i = 1; i < Math.ceil(posts.length / 5) + 1; i++) {
          //     pageNumbers.push(i);
          // }
          // console.log(posts.length, "pgNO")
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
        })
        .catch(error => {
          dispatch({ type: 'CREATE_POST_ERROR', payload: error });
        });
    };
  };