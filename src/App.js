import React from "react";
import "./App.css";

import HeaderContainer from "./Components/Header/header";
import LeftSiderContainer from "./Components/LeftSideBar/left_side_bar";
import RightSiderContainer from "./Components/RightSideBar/right_side_bar";
import FCcontent from "./Components/Content/content";

function App() {
  return (
    <div className="App">
      <div>
        <HeaderContainer style={{ position: "fixed" }} />
      </div>

      <layout style={{ padding: "41px 0px 0px 0px" }}>
        <LeftSiderContainer />

        <RightSiderContainer />
      </layout>
      <div id="c" style={{ paddingLeft: 260, marginTop: 0, paddingRight: 0 }}>
        <FCcontent />
      </div>
    </div>
  );
}

export default App;
