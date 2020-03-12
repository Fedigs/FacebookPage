import React from "react";
import "./left_sider.css";

import { Layout, Menu } from "antd";
import SearchInput from "../../Components/RightSideBar/input_search";
import Lock from "../../assets/images/icon-posts/lock.png";

const { Sider } = Layout;

function LeftSiderContainer() {
  return (
    <div id="siderleft">
      <Sider
        className="LeftSider"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <div className="logo" />
        <Menu mode="inline" defaultSelectedKeys={["2"]} className="LeftSider">
          <Menu.Item>
            <span id="GroupName">ING2-INLOG-INREV </span> <br />
          </Menu.Item>

          <Menu.Item>
            <img
              id="photo-icon"
              src={Lock}
              alt="photo-icon"
              style={{
                width: 20,
                height: 15,
                paddingRight: 6,
                float: "left",
                paddingBottom: 0
              }}
            />
            <span id="Gprivé">Groupe privé</span>
          </Menu.Item>

          <Menu.Item key="2">
            <span className="nav-text">A propos</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="nav-text">Discussion</span>
          </Menu.Item>
          <Menu.Item key="4">
            <span className="nav-text">Membres</span>
          </Menu.Item>
          <Menu.Item key="5">
            <span className="nav-text">Evénements</span>
          </Menu.Item>
          <Menu.Item key="6">
            <span className="nav-text">Photos</span>
          </Menu.Item>
          <Menu.Item key="7">
            <span className="nav-text">Fichiers</span>
          </Menu.Item>
          <Menu.Item key="8">
            <span className="nav-text">Séance vidéo</span>
          </Menu.Item>

          <SearchInput />

          <Menu.Item>
            <span id="Gprivé">Raccourcis</span>
          </Menu.Item>

          <Menu.Item key="8">
            <span className="nav-text">Groupe 1</span>
          </Menu.Item>
          <Menu.Item key="9">
            <span className="nav-text">Groupe 2</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
}

export default LeftSiderContainer;
