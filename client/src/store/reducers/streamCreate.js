import { STREAM_CREATE } from '../actions/types';


const INITIAL_STATE = {
 created: false
}

export const streamCreateReducer = (state=INITIAL_STATE, action) => {
    const { type } = action;
    switch(type) {
        case STREAM_CREATE:
            return { ...state, created: true }
            default:
                return state;
    }
}