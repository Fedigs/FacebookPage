import React from "react";
import { Button } from "antd";

export default function button(props) {
  const { title, photo, type } = props;
  if (type === "btn_couv") return <Button>{title}</Button>;
  else if (type === "btn_to-post")
    return (
      <Button
        shape="round"
        style={{
          float: "left",
          marginRight: 5,
          marginTop: 5,
          backgroundColor: "#dfe1ee"
        }}
        icon={
          <img
            id="photo-icon"
            src={photo}
            alt="photo-icon"
            style={{ width: 25, height: 20, paddingRight: 6 }}
          />
        }
      >
        {title}
      </Button>
    );
}
