import React, { useState } from "react";
import sun from "../../images/icon-sun.svg";
import moon from "../../images/icon-moon.svg";
import "./header-container.css";

function HeaderContainer() {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => {
    setIsChecked(!isChecked);
    document.body.classList.toggle("light");
  };
  const checkbox = isChecked ? moon : sun;
  return (
    <div className="header-container">
      <h1>T O D O</h1>
      <button className="toggle-mode" onClick={toggleCheck}>
        <img src={checkbox} alt="toggle mode icon" />
      </button>
    </div>
  );
}

export default HeaderContainer;
