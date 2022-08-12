import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import './ChatInput.css'
import db from './firebase'
import { useStateValue } from '../context/StateProvider'

const ChatInput = ({ channelName, roomId }) => {

    const [input, setInput] = useState('')
    const [{ user }, dispatch] = useStateValue();

    const submitHandler = e => {
        e.preventDefault();
        console.log("inside submit")
        if (roomId) {
            addDoc(collection(db, 'room', roomId, 'messages'), {
                userMessage: input,
                timeStamp: serverTimestamp(),
                userName: user.displayName,
                userImage: user.photoURL,
            })
        }
        setInput('')

    }

    const textInputHandler = e => {
        setInput(e.target.value)
    }

    return (
        <div className='chatInput'>
            <form>
                <input onChange={textInputHandler} value={input} placeholder={`message #${channelName?.toLowerCase()}`} />
                <button type='submit' onClick={submitHandler}>send</button>
            </form>
        </div>
    )
}

export default ChatInput