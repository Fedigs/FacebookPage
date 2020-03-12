import React from "react";
import { Card } from "antd";

import { Avatar } from "antd";
import Photo from "../../assets/images/post-photo/photo-post.PNG";
import Like from "../../assets/images/icon-posts/like.png";
import Comment from "../../assets/images/icon-posts/comment.png";
import Post from "./post";
const { Meta } = Card;
const post_type = "photo";

function PhotoPost() {
  return (
    <div>
      <Post post_type={post_type} />
    </div>
  );
}

export default PhotoPost;
