import React, { useState } from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';

import './post.css';
import { Avatar } from 'primereact/avatar';
import { Link } from 'react-router-dom';

const Post = ({ author, time, caption, picture }) => {
    const [commentOpen, setCommentOpen] = useState(false),
        [liked, setLiked] = useState(false);

    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="mr-3" icon="pi pi-user" size="large" shape="circle" style={{ cursor: 'pointer' }} />
                <div className="flex-grow-1">
                    <Link to="#" className="user-link">{author}</Link>
                    <div className="mt-1">{time}</div>
                </div>
                
            </div>
            <div className="post__content">
                <div className="content__caption">{caption}</div>
                <div className="content__pictures">
                    <Image src={picture} template={<></>} alt="Image" preview width="100%" />
                </div>
            </div>
            <div className="post__footer">
                <Button className="mr-2" icon={`pi md ${liked ? "pi-heart-fill" : "pi-heart"}`} rounded text onClick={() => setLiked(!liked)} />
                <Button className="mr-2" icon="pi md pi-comments" rounded text onClick={() => setCommentOpen(!commentOpen)} />
                <Button className="mr-2" icon="pi md pi-send" rounded text />
            </div>
            {commentOpen ? 
                <div className="post__comments"></div>
            : null}
        </div>
    )
}

export default Post;