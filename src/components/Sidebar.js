import { Avatar } from '@mui/material'
import React from 'react'
import "./css/sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        
        <div className='sidebar_recentItems'>
            <span className='sidebar_hash'>#</span>
            <p> {topic}</p>
        </div>
    
    )


    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="./images/background.jpg" alt="" />
                <Avatar className='sidebar_avatar' />
                <h2> Christian MArio</h2>
                <h4>crismario60z6crismario60z6@gmail.com</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className='sidebar_statNumber'>9,862</p>
                </div>

                <div className="sidebar_stat">
                    <p>Views on Post</p>
                    <p className='sidebar_statNumber'>17,862</p>
                </div>
                <div className="sidebar_stat">
                    <p>Successful adds </p>
                    <p className='sidebar_statNumber'>6,432</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('programming')}
                {recentItem('software engineering')}
                {recentItem('design')}
                {recentItem('developer')}

            </div>


        </div>
    )
}

export default Sidebar
