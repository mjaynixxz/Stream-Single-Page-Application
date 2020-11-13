import axios from "axios";
import { setAlert } from "./alert";
import { STREAM_LIST, STREAM_CREATE, FETCH_STREAM, DELETE_STREAM } from "./types";

export const streamList = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3007/api/streams/me");
    if (res.length === 0) {
      console.log("Array is empty");
    }
    console.log(res.data)
    dispatch({
      type: STREAM_LIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const streamCreate = (name, category, description) => async dispatch => {

  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, category, description })
  try {
    const res = await axios.post('http://localhost:3007/api/streams', body, config);

    dispatch({
      type: STREAM_CREATE,
      payload: res.data
    })


  } catch (error) {
    
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger", 3000)));
    }    
  }
}


export const fetchStream = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3007/api/streams/${id}`)
    console.log(res.data)

    dispatch({
      type: FETCH_STREAM,
      payload: res.data
    })
  } catch (error) {
    const errors = error.response.data.errors;
    dispatch(setAlert(errors, 'danger', 3000))
  }
}

export const streamDelete = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:3007/api/streams/delete/${id}`)

    dispatch({
      type: DELETE_STREAM,
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
}
