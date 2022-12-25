import React from "react";
import Filter from "../Filter/Index";
import HeaderContainer from "../Header-Container";
import Input from "../Input/Index";
import Output from "../Output/Output-list";
import "./container.css";
function Container() {
  return (
    <div className="container">
      <HeaderContainer />
      <Input />
      <Output />
      <Filter />
    </div>
  );
}

export default Container;
