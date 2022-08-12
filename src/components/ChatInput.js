import React, { useState } from 'react'
import './ChatInput.css'

const ChatInput = ({ channelName, roomId }) => {

    const [input, setInput] = useState('')

    const submitHandler = e => {
        e.preventDefault();

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