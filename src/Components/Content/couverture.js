import React from "react";
import "./content.css";

import couverture from "../../assets/images/couverture/couverture.PNG";
import { Card } from "antd";
import Button from "./button";

function PhotoCouverture() {
  const buttons = ["Membre", "Notification", "Partager", "... Plus"];
  const type = "btn_couv";
  return (
    <div>
      <Card
        hoverable
        style={{ width: 800, paddingRight: 0 }}
        cover={<img alt="Couverture" src={couverture} />}
      >
        <div style={{ float: "left" }}>
          {buttons.map(item => (
            <Button title={item} type={type} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default PhotoCouverture;
