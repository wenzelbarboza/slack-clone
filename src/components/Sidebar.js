import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import MessageIcon from '@mui/icons-material/Message';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
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
            <SidebarOption Icon={MessageIcon} text='Threads' />
            <SidebarOption Icon={InboxIcon} text='Mentions & reactions' />
            <SidebarOption Icon={DraftsIcon} text='Saved items' />
            <SidebarOption Icon={BookmarkBorderIcon} text='Channel browser' />
            <SidebarOption Icon={PeopleAltIcon} text='People and user groups' />
            <SidebarOption Icon={AppsIcon} text='Apps' />
            <SidebarOption Icon={FileCopyIcon} text='File browser' />
            <SidebarOption Icon={ExpandLessIcon} text='show less' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} text='chat name' />
            <hr />
            <SidebarOption Icon={AddIcon} text='chat name' />

        </div>
    )
}

export default Sidebar