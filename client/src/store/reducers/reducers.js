import { combineReducers } from "redux";
import { alertReducer } from "./alert";
import { authReducer } from "./auth";
import { streamReducer } from "./streams";
import {streamCreateReducer} from './streamCreate'
import {fetchStreamReducer} from './fetchStream';

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  streams: streamReducer,
  isCreated: streamCreateReducer,
  fetchStream: fetchStreamReducer
});
