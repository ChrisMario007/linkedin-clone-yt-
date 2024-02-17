import React, { useState } from 'react'
import './css/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from './Posts';

function Feed() {
const [posts, setPosts] = useState([])


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
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
                    <InputOption Icon={SubscriptionsIcon} title={"Video"} color={"#E7A33E"} />
                    <InputOption Icon={CalendarMonthIcon} title={"Event"} color={"#C0CBCD"} />
                    <InputOption Icon={CalendarViewDayIcon} title={"Write Article"} color={"#7FC15E"} />

                </div>
            </div>

<Posts name={"MAaaaa"} description={"testt this is"} message={"message says wow "}/>

        </div>
    )
}

export default Feed