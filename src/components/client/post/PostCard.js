import React from "react";
import { NavLink } from "react-router-dom";
import avatar from '../../../assets/image/png.png'
import Button from '../../common/button/Button'

const PostCard = ({ item }) => {
  const { image, title, author, date } = item;
  return (
    <>
      <div className="postCardBody">
        <div className="postCardImage">
          <img src={image} alt='images' />
        </div>
        <div className="postCardTitle">
          <h3>{title}</h3>
          <NavLink to="/post">
            <Button text={"More...."} />{" "}
          </NavLink>
        </div>
        <div className="postCardInfo">
          <div className="avatar">
            <img src={avatar} alt='myimg' />
          </div>
          <div className="cartInfoText">
            <h4>{author}</h4>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
