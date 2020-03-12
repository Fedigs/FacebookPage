import React from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchInput() {
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
    </div>
  );
}

export default SearchInput;
