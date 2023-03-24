import React from 'react';
import Leftbar from '../../components/leftbar/leftbar';
import Navbar from '../../components/navbar/navbar';
import Post from '../../components/post/post';
import Rightbar from '../../components/rightbar/rightbar';

import './home.css';

const posts = [
    {
        author: 'Person 1',
        time: '1 hour',
        caption: 'Person 1 posted.',
        pictures: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg'
    },
    {
        author: 'Person 1',
        time: '1 hour',
        caption: 'Person 1 posted.',
        pictures: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg'
    },
    {
        author: 'Person 1',
        time: '1 hour',
        caption: 'Person 1 posted.',
        pictures: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg'
    },
    {
        author: 'Person 1',
        time: '1 hour',
        caption: 'Person 1 posted.',
        pictures: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg'
    }
]

const Home = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Leftbar />
            <div className="content-container">
                <div className="content-field">
                    {posts.map((post, index) => <Post author={post.author} time={post.time} caption={post.caption} picture={post.pictures} key={index} />)}
                </div>
            </div>
            <Rightbar />
        </div>
    )
}

export default Home;