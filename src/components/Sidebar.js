import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import MessageIcon from '@mui/icons-material/Message';
import './Sidebar.css'
import SidebarOption from './SidebarOption';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>name</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        wenzel
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={MessageIcon} text='chat name' />
            <SidebarOption text='chat name' />
        </div>
    )
}

export default Sidebar