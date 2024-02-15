import React from 'react'
import './css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';




function Header() {
    return (
        <div className='header'>
            <div className="header-left">
                <img src="./images/linkedin.png" alt="" />
                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />

                </div>


            </div>

            <div className="header-right">
                <HeaderOptions Icon={HomeIcon} title={"home"} />
                <HeaderOptions Icon={SupervisorAccountIcon} title={"My Network"} />
                <HeaderOptions Icon={BusinessCenterIcon} title={"Jobs"} />
                <HeaderOptions Icon={ChatIcon} title={"Messaging"} />
                <HeaderOptions Icon={NotificationsIcon} title={"Notifications"} />
                <HeaderOptions  avatar="https://www.flaticon.com/free-icons/user" title={"Mario"} />


            </div>

        </div>
    )
}


export default Header