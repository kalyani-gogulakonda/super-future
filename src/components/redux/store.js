//import redux and createStore
import { createStore,  applyMiddleware} from 'redux';
import { reducer } from './reducer/reducer';
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));