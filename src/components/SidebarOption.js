import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ Icon, text }) => {
    return (
        <div className='SidebarOption'>
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