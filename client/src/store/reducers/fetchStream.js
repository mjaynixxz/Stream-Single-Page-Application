import { fetchStream } from '../actions/streamList';
import { DELETE_STREAM, FETCH_STREAM } from '../actions/types'

const INITIAL_STATE = {};

export const fetchStreamReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case FETCH_STREAM:
            return {...state, ...payload }
        case DELETE_STREAM:
            return {...state}
        default:
            return state;
        
    } 
}