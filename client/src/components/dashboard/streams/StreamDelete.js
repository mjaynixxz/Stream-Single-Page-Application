import React, { Fragment, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchStream, streamDelete } from '../../../store/actions/streamList'
import Modal from '../../layout/Modal'
import { store } from '../../../index';

const StreamDelete = (props) => {
const history = useHistory();

useEffect(()=> {
    
    store.dispatch(fetchStream(props.match.params.id));
    
    
}, [props.match.params.id]);

const actions = (
                 <Fragment>
                    <button onClick={
                        ()=> {
                            store.dispatch(streamDelete(props.match.params.id))
                            history.push('/dashboard')
                        }
                    } className='btn btn-danger'>Delete</button>
                    <Link to='/dashboard' className='btn'>Cancel</Link>
                </Fragment>
);

const onDismiss = () => history.push('/dashboard')
    
    if (!props.fetch_stream) return null;

    return (
        <div>

            <Modal title={'Delete Stream'} content={`Are you sure you want to delete ${props.fetch_stream.name}?`}  actions={actions} onDismiss={onDismiss}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        fetch_stream: state?.fetchStream
    }
}

export default connect(mapStateToProps, { fetchStream, streamDelete })(StreamDelete)
