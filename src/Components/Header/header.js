import React from "react";
import "./header.css";
import logoFB from "../../assets/images/logos/facebook-white-logo.png";

import { Layout, Input } from "antd";

const { Header } = Layout;
const { Search } = Input;

const searchContainer = {
  display: "inline",
  marginBottom: "20px"
};

const search = {
  width: 444,
  position: "absolute",
  marginTop: "10px",
  marginLeft: "6px",
  padding: "1px 11px",
  color: "#e9ebee"
};

function HeaderContainer() {
  return (
    <div>
      <Header className="header">
        <div class="flex-container">
          <div>
            <img id="logoFb" src={logoFB} alt="Logo FaceBook" />
          </div>
          <div style={searchContainer}>
            <Search
              placeholder="Rechercher"
              onSearch={value => console.log(value)}
              id="SearchHeader"
              style={search}
            />
          </div>
        </div>
        <div>{/* <h4>Amal Acceuil Créer</h4> */}</div>
      </Header>
    </div>
  );
}

export default HeaderContainer;
