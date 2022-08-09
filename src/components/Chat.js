import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { query, orderBy, collection, collectionGroup } from "firebase/firestore";
import './Chat.css'
import { doc, onSnapshot } from 'firebase/firestore';
import db from './firebase';

const Chat = () => {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState()
    const messagesRef = collection(db, 'room', roomId, 'messages')

    useEffect(() => {
        if (roomId) {
            onSnapshot(doc(db, "room", roomId), (snapshot) => {
                setRoomDetails(snapshot)
            })
        }

        onSnapshot(query(messagesRef, orderBy("timeStamp", 'asc')), (snapShot => {
            snapShot.forEach(doc => console.log(doc.data()))
        }))
    }, [roomId])


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
        </div>
    )
}

export default Chat