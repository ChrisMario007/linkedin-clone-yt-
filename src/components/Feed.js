import React from 'react'
import './css/Feed.css'
import CreateIcon from '@mui/icons-material/Create';

function Feed() {
    return (
        <div className='Feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type='text' />
                        <button type='sumbit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feed