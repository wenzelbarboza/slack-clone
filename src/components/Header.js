import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <Avatar alt="Remy Sharp" src="" />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder='search' />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div >
    )
}

export default Header