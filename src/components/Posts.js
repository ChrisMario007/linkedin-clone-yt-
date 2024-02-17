import React from 'react'
import './css/Posts.css'
import { Avatar } from '@mui/material'
function Posts({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>mario Anna Mills</h2>
                    <p>desc</p>

                </div>
            </div>
<div className="post_body">
    <p>Message goes here</p>
</div>

        </div>
    )
}

export default Posts