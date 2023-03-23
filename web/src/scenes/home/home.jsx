import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Post from '../../components/post/post';

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
            <div>
                {posts.map(post => <Post author={post.author} time={post.time} caption={post.caption} picture={post.pictures} ></Post>)}
            </div>

        </div>
    )
}

export default Home;