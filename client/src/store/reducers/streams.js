import _ from 'lodash'
import { STREAM_LIST, LOG_OUT } from "../actions/types";
const INITIAL_STATE = {
  payload: []
};

export const streamReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case STREAM_LIST: 
      return { ...state, payload }
      // return [...state, payload.map(item => { return { [item._id]: item } })]
    
   
    case LOG_OUT:
        return state;
    default:
      return state;
  }
};
