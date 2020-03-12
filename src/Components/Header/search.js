import React from "react";
import { Input } from "antd";

const { Search } = Input;

function Search2() {
  return (
    <div>
      <Search
        placeholder="Rechercher"
        onSearch={value => console.log(value)}
        enterButton
      />
    </div>
  );
}

export default Search2;
