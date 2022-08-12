import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { query, orderBy, collection, collectionGroup } from "firebase/firestore";
import './Chat.css'
import { doc, onSnapshot } from 'firebase/firestore';
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';

const Chat = () => {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setroomMessages] = useState([])
    const messagesRef = collection(db, 'room', roomId, 'messages')

    useEffect(() => {
        if (roomId) {
            onSnapshot(doc(db, "room", roomId), (snapshot) => {
                setRoomDetails(snapshot.data())
            })
        }

        onSnapshot(query(messagesRef, orderBy("timeStamp", 'asc')), (snapShot => {
            setroomMessages(snapShot.docs.map(doc => doc.data()))
        }))
    }, [roomId])

    console.log('messages>>>>>>', roomMessages)

    return (
        <div className='Chat'>
            <div className="chat__header">
                <div className="chat__haederLeft">
                    <h4 className='chat__channelName'>
                        <strong>#{roomDetails?.name}</strong>
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
            <div className="chat__messages">
                {/* render the messages */}
                {
                    roomMessages.map(({ userMessage, userImage, userName, timeStamp }) => (
                        <Message

                            key={Math.random * 30}

                            user={userName}
                            image={userImage}
                            timeStamp={timeStamp}
                            message={userMessage}
                        />
                    )
                    )
                }
            </div>
            <div className="chat__input">
                <ChatInput channelName={roomDetails?.name} roomId={roomId}></ChatInput>
            </div>
        </div>
    )
}

export default Chat