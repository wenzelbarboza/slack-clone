import { async } from '@firebase/util'
import { collection, setDoc, addDoc } from 'firebase/firestore'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import db from './firebase'
import './SidebarOption.css'

const SidebarOption = ({ Icon, text, addChannelOption, id }) => {
    const navigate = useNavigate()

    const selectChannel = () => {
        if (id) {
            navigate(`/room/${id}`)
        } else {
            navigate('title')
        }
    }

    const addChannel = async () => {
        const channelName = prompt('enter channel name')
        if (channelName) {
            await addDoc(collection(db, "room"), {
                name: channelName
            });
        }
    }

    return (
        <div className='SidebarOption' onClick={addChannelOption ? addChannel : selectChannel} >
            {Icon && <Icon className="SidebarOption__icon" />}
            {Icon ? (
                <h3>{text}</h3>
            ) : (
                <h3 className='SidebarOption__channel'>
                    <span className='SidebarOption__hash' >#</span>
                    {text}
                </h3>
            )}
        </div>
    )
}

export default SidebarOption