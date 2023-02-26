import { GET_LIST_RESOURCE } from '../actions/action';

const initialState = {
  listResource: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_RESOURCE:
      return {
        ...state,
        listResource: action.payload
      };
    default:
      return state;
  }
};


