import React, { Fragment, useState } from "react";
import { connect } from 'react-redux'
import { Redirect, useHistory } from "react-router-dom";
import { store } from "../../..";
import { streamCreate } from '../../../store/actions/streamList'


import Alert from "../../layout/Alert";

const StreamCreate = ({ isCreated }) => {

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
    name:'', category: '', description:''
  })

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
      <h1 className="large text-primary"><i className='fas fa-video'></i>{' '}Create Stream</h1>

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
    isCreated: state.isCreated?.created
  }
}

export default connect(mapStateToProps, { streamCreate })(StreamCreate);
