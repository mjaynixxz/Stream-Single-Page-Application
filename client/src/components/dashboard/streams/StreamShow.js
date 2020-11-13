import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import Comment from '../../Comment'
import { fetchStream } from '../../../store/actions/streamList'
import { store } from '../../..';

const StreamShow = ({ match, fetch_stream }) => {
    useEffect(() => {

        store.dispatch(fetchStream(match.params.id))
    },[match.params.id])
    
    return (
        <>
        <div style={{ display: "flex", alignItems: "center" }}><i className="fas fa-play-circle fa-5x text-primary"></i><h1 className='m-1 large text-primary'>{`Currently playing ${fetch_stream.name}`}</h1></div>
        <div className='video__container'>
        <video className='video__stream' controls autoPlay loop>
          <source src="" type=""></source>
        </video>
        </div>

        <Comment placeholder='Type in your comment here' />

    </>
    )
}

const mapStateToProps = state => {
    return {
        fetch_stream: state?.fetchStream
}
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
