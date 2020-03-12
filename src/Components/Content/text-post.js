import React from "react";
import { Card } from "antd";

import { Avatar } from "antd";
import Like from "../../assets/images/icon-posts/like.png";
import Comment from "../../assets/images/icon-posts/comment.png";
import Post from "./post";

const { Meta } = Card;
const post_type = "text";
function TextPost() {
  return (
    <div>
      <Post post_type={post_type} />
    </div>
  );
}

export default TextPost;
