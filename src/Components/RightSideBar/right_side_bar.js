/* eslint-disable react/jsx-pascal-case */
import React from "react";
//import "./right_sider.css";
import SearchInput from "./input_search";
import AmiConnecté from "./avatar";

import { Layout, Menu } from "antd";

const { Sider } = Layout;

const searchContainerStyle = { position: "fixed", bottom: 0, right: 0 };

var tab = [
  {
    Utilisateur: "Utilisateur 1"
  },
  {
    Utilisateur: "Utilisateur 2"
  },
  {
    Utilisateur: "Utilisateur 3"
  },
  {
    Utilisateur: "Utilisateur 4"
  },
  {
    Utilisateur: "Utilisateur 5"
  },
  {
    Utilisateur: "Utilisateur 6"
  },
  {
    Utilisateur: "Utilisateur 7"
  },
  {
    Utilisateur: "Utilisateur 8"
  },
  {
    Utilisateur: "Utilisateur 9"
  },
  {
    Utilisateur: "Utilisateur 10"
  },
  {
    Utilisateur: "Utilisateur 11"
  },
  {
    Utilisateur: "Utilisateur 12"
  }
];

function RightSiderContainer() {
  return (
    <div id="siderleft">
      <Sider
        className="LeftSider"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          right: 0
        }}
      >
        <Menu mode="inline" defaultSelectedKeys={["1"]} className="LeftSider">
          {tab.map((item, index) => (
            <Menu.Item key={index}>
              <p className="nav-text"> {item.Utilisateur}</p>
              <AmiConnecté />
            </Menu.Item>
          ))}
        </Menu>

        <div style={searchContainerStyle}>
          <SearchInput />
        </div>
      </Sider>
    </div>
  );
}

export default RightSiderContainer;
