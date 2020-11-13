import React, { Fragment } from 'react'

const Comment = ({ placeholder }) => {
    return (
     <>
        <form>
            <div className='comment__container'>
                <textarea className='comment' placeholder={placeholder}  wrap></textarea>
                <input className='comment__btn btn btn-primary' type='submit' name='submit' value='Post' />
            </div>
        </form>
     </>
    )
}

export default Comment;

