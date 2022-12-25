import React, { useEffect, useState } from "react";
import "./input.css";
import apiUrl from "../../services/api_url";
import axios from "axios";

function Input() {
  const addNewTaskHandler = async (e) => {
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        const data = {
          title: e.target.value,
          complated: false,
        };
        await axios.post(apiUrl, data);

        e.target.value = "";
      } else {
        alert("please fill out the task input");
      }
    }
  };
  return (
    <>
      <div className="input-container">
        <div className="circle">
          <div className="circle-el"></div>
        </div>
        <input
          onKeyDown={addNewTaskHandler}
          type="text"
          placeholder="Type Something Here..."
        />
      </div>
    </>
  );
}

export default Input;
