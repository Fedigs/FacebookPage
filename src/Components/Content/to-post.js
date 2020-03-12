import React from "react";

import { Input } from "antd";
import { Card } from "antd";
import Button from "./button";
import PhotoIcon from "../../assets/images/icon-posts/photo-icon.png";
import SeanceVideoIcon from "../../assets/images/icon-posts/seance-video.png";
import Tag from "../../assets/images/icon-posts/tag.png";

const { TextArea } = Input;
const buttons = [
  { title: "Photo/Video", photo: PhotoIcon },
  { title: "Séance video", photo: SeanceVideoIcon },
  { title: "Identifier des..", photo: Tag }
];
const type = "btn_to-post";

function ToPost() {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <a href="jj" style={{ float: "left", marginRight: 12 }}>
          Message
        </a>
        <span style={{ float: "left", marginRight: 12 }}>Photo</span>
        <span style={{ float: "left", marginRight: 12 }}>Video en direct</span>
        <span style={{ float: "left", marginRight: 12 }}>Plus..</span>
        <TextArea rows={4} placeholder="Exprimer-vous..." />;
        {buttons.map(item => (
          <Button title={item.title} photo={item.photo} type={type} />
        ))}
      </Card>
      <br />
      <br />
    </div>
  );
}

export default ToPost;
