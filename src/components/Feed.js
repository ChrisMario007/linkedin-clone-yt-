import React, { useEffect, useState } from 'react'
import './css/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Posts from './Posts';
import firebase from 'firebase';

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // firing off on only the first render
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))

    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: "madaefw",
            description: "tests etst tesst",
            message: input,
            photoUrl: "", // You may update this with the actual URL if applicable
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
    };


    return (
        <div className='Feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='sumbit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"} />
                    <InputOption Icon={SubscriptionsIcon} title={"Video"} color={"#E7A33E"} />
                    <InputOption Icon={CalendarMonthIcon} title={"Event"} color={"#C0CBCD"} />
                    <InputOption Icon={CalendarViewDayIcon} title={"Write Article"} color={"#7FC15E"} />

                </div>
            </div>

            {posts.map((post) => {

            })}

            <Posts name={"MAaaaa"} description={"testt this is"} message={"message says wow "} />

        </div>
    )
}

export default Feed