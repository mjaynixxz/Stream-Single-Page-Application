import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import {streamList} from '../../../store/actions/streamList'
import { store } from '../../../index';

const StreamList = ({ streams }) => {

  


  useEffect(() => {
    store.dispatch(streamList());
  }, []);

    const renderStream = () => streams?.map(stream => {
      return (
        
              <div key={stream._id} className='streamList__card m-1'>
                <Link to={`/dashboard/streamShow/${stream._id}`}>
                <img className='streamList__img' src="https://via.placeholder.com/150" alt="Avatar" />
                <div className="streamList___text m-1">
                  <h2>Name: <strong>{stream.name}</strong></h2>
                  <h3>Category: <strong>{stream.category}</strong></h3>
                  </div>
                  </Link>
                  <div onClick={e=> e.stopPropagation()}  style={{ display: 'flex', zIndex: '1000', justifyContent: 'flex-end'}}>
                      <div><Link to={`/dashboard/editStream/${stream._id}`} className='btn btn-primary'>Edit</Link></div>
                      <div><Link to={`/dashboard/delete/${stream._id}`} className='btn btn-danger'>Delete</Link></div>
      
                  </div>
                
              </div>
          
   
      );
    })
      
       
   



  return <div className='streamList__container'>{renderStream()}</div>;
};

const mapStateToProps = (state) => {

  return {
    streams: state.streams.payload,
  };
};
export default connect(mapStateToProps, { streamList })(StreamList);




// <div className='streamList__container'>
//           <div key={stream?._id} className='streamList__card'>
//             <img className='streamList__img' src="https://via.placeholder.com/150" alt="Avatar" />
//             <div className="streamList___text m-1">
//               <h2><Link to="/dashboard/streamShow">Name: <strong>{stream?.name}</strong></Link></h2>
//               <h3><Link to="/dashboard/streamShow">Category: <strong>{stream?.category}</strong></Link></h3>
//               <div style={{ display: 'flex', zIndex: '1000', justifyContent: 'flex-end'}}>
//                   <div><button className='btn btn-primary'>Edit</button></div>
//                   <div><button className='btn btn-danger'>Delete</button></div>
  
//               </div>
//             </div>
//           </div>
//         </div>