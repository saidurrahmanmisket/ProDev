import React from 'react';
import data from '../../../database/postdata.json'
import PostCard from './PostCard';
import './Post.css'

const Post = () => {
    return (
      <>
        <div className="postBody">
          {data.map((item) => (
            <PostCard item={item} />
          ))}
        </div>
      </>
    );
};

export default Post;