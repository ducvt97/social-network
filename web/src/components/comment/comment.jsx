import { Avatar } from 'primereact/avatar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './comment.css';

const Comment = ({ author, content }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="comment">
            <Avatar icon="pi pi-user" size="large" shape="circle" style={{ cursor: 'pointer' }} />
            <div className="flex-grow-1 ml-2">
                <div className="comment__box">
                    <Link to="#" className="user-link">{author}</Link>
                    <div className="mt-1">{content}</div>
                </div>
                <div className="comment__action">
                    <div className="flex">
                        <div className={`link ${liked ? 'active' : ''} mr-3`} onClick={() => setLiked(!liked)}>Like</div>
                        <div className="link">Reply</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Comment;