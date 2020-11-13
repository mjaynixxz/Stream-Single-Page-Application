import React from 'react'
import ReactDOM from 'react-dom'


import './modal.css';

const Modal = ({ title, content, actions, onDismiss }) => {

    return ReactDOM.createPortal(
        <div  onClick={onDismiss} className='backdrop'>
            <div onClick={e=> e.stopPropagation()} className='modal'>
                <div className='modal__header'>
        <h1>{title}</h1>
                </div>
    <div className='modal__content'><h2>{content}</h2></div>
                <div className='modal__buttons'>
                    {actions}
                </div>
            </div>

        </div>,
        document.querySelector('#modal')
    );
}

export default Modal
