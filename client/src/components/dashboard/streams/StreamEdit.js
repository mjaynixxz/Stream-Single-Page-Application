import React, { Fragment, useEffect, useState } from "react";
import { connect } from 'react-redux'
import { Redirect, useHistory } from "react-router-dom";
import { store } from "../../..";
import { fetchStream, streamCreate } from '../../../store/actions/streamList'


import Alert from "../../layout/Alert";

const StreamEdit = ({ isCreated, fetch_stream, match }) => {

    console.log(match.params.id)

  const history = useHistory();

  const [items] = useState([
    {
      label: '', value: ''
    },
    {
      label: "Action",
      value: "Action"
    },
    { label: "Adventure", value: "Adventure" },
    { label: "Sport", value: "Sport" },
    { label: "Crime", value: "Crime" }
  ]);

  const [value, setValue] = useState({
    name: fetch_stream.name, category: fetch_stream.category, description:fetch_stream.description
  })


  useEffect(()=> {
    store.dispatch(fetchStream(match.params.id))
  }, [match.params.id]);

  const { name,  category, description } = value;

  const onChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value})
  }
  
const onSubmit = e => {
  e.preventDefault()
  store.dispatch(streamCreate(name, category, description))

  if (isCreated) return history.push('/dashboard');
  
}




  return (
    <Fragment>
      <h1 className="large text-primary"><i className='fas fa-video'></i>{' '}Edit Stream</h1>

      <Alert />
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required

          />
        </div>
        <div className="form-group">
        <select name='category' value={category} onChange={e => setValue({...value, category: e.currentTarget.value})}>
            {items.map(({label, value}) => (
            <option
              key={value}
              value={value}
            >
              {label}
            </option>
          ))}   
    </select>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            placeholder="description"
            rows="4"
            cols="50"
            name="description"
            value={description}
            onChange={e=>onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Create" />
      </form>

    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    fetch_stream: state?.fetchStream
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
