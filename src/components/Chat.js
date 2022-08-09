import React from 'react'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import './Chat.css'

const Chat = () => {
    const { roomId } = useParams()

    return (
        <div className='Chat'>
            <div className="chat__header">
                <div className="chat__haederLeft">
                    <h4 className='chat__channelName'>
                        <strong>#general</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon />
                        Details
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat