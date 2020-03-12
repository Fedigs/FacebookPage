import React from "react";

import "./content.css";
import PhotoCouverture from "./couverture";
import ToPost from "./to-post";
import PhotoPost from "./photo-post";
import TextPost from "./text-post";
import { Layout } from "antd";

import { Breadcrumb } from "antd";

const { Content } = Layout;

function FCcontent() {
  return (
    <div>
      <Content style={{ margin: "0 16px" }}>
        <PhotoCouverture />
        <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
        <div style={{ width: 800 }}>
          <ToPost />
        </div>

        <div style={{ width: 800 }}>
          <TextPost />
          <PhotoPost />
        </div>

        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        ></div>
      </Content>
    </div>
  );
}

export default FCcontent;
