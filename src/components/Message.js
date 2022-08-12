import { Timestamp } from 'firebase/firestore'
import React from 'react'
import './Message.css'

const Message = ({ message, user, image, timeStamp }) => {
    return (
        <div className='message'>
            <img src={image} alt="user immage" />
            <div className="message__info">
                <h4>{user},<span className='message__timeStamp'>{new Date(timeStamp?.toDate()).toUTCString()}</span></h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message