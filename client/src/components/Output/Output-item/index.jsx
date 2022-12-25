import React, { useState } from "react";
import "./output-item.css";
import axios from "axios";
import apiUrl from "../../../services/api_url";
function OutputItem({ title, id, complated }) {
  const [complatedState, setComplatedState] = useState(!complated);
  async function toggleComplated() {
    /*
          1- get current complated and create state with !currnet value
          2- put request with clicked list element's id
          3- alert message to say "updated!"
        */
    let body = {
      complated: complatedState,
    };
    await axios.put(`${apiUrl}/update/complated/${id}`, body).then((res) => {
      setTimeout(() => {
        alert(res.data.message);
      }, 100);
    });

    setComplatedState(!complatedState);
    complated = !complated;
  }
  return (
    <>
      <li>
        <div className={`circle c-${complated}`} onClick={toggleComplated}>
          <div className="circle-el"></div>
        </div>
        <div className={"text-container"}>
          <p className="text">{title}</p>
        </div>
      </li>
    </>
  );
}

export default OutputItem;
