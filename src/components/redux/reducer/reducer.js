import { FETCH_POSTS_REQUEST } from '../action/actionTypes';
import { FETCH_POSTS_SUCCESS } from '../action/actionTypes';
import { FETCH_POSTS_ERROR } from '../action/actionTypes';

//define the initial state 
const initialState = {
    posts: [],
    loading: false,
    error: null,
    totalPages: []
  };

//create reducer
export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        }
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
          loading: false,
          error: null
        }
      case FETCH_POSTS_ERROR:
        return {
          ...state,
          loading: true,
          error: action.payload
        }
      default:
        return state;
    }
  };
  