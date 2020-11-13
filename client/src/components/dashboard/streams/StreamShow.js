import React, { useEffect, useRef } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux'

import Comment from '../../Comment'
import { fetchStream } from '../../../store/actions/streamList'
import { store } from '../../..';

const StreamShow = ({ match, fetch_stream }) => {
    const videoRef = useRef(match.params.id);

    console.log(videoRef)

    useEffect(() => {

        
 
        store.dispatch(fetchStream(match.params.id))

        const flvPlayer = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${match.params.id}.flv`
        });

        flvPlayer.attachMediaElement(videoRef?.current);
        flvPlayer.load();

    },[match.params.id])
    
    return (
        <>
        <div style={{ display: "flex", alignItems: "center" }}><i className="fas fa-play-circle fa-5x text-primary"></i><h1 className='m-1 large text-primary'>{`Currently playing ${fetch_stream.name}`}</h1></div>
        <div className='video__container'>
        <video ref={videoRef} className='video__stream' controls loop />
          
        
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
