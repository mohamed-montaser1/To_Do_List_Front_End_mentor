import React, { useEffect, useRef, useState } from "react";

import "./filter.css";
import axios from "axios";
import apiUrl from "../../services/api_url";

function Filter() {
  const [data, setData] = useState([]);
  const filterCount = useRef(null);
  useEffect(() => {
    async function getNotcomplatedTasks() {
      const res = await axios.get(`${apiUrl}/active`);
      const data = res.data.allTasks;
      setData(data);
      let el = filterCount.current;
      el.innerHTML = data.length;
    }
    getNotcomplatedTasks();
  }, [data]);

  const clearAllComplated = async () => {
    const res = await axios.delete(`${apiUrl}`);
    setTimeout(() => {
      alert(res.data.message);
    }, 100);
  };
  const AllHandler = () => {
    document.body.dataset.status = "all";
  };

  const activeHandler = () => {
    document.body.dataset.status = "active";
  };

  const ComplatedHandler = () => {
    document.body.dataset.status = "complated";
  };

  return (
    <>
      <div className="filter">
        <p className="items-left">
          <span id="complated-item-count" ref={filterCount}></span> items left
        </p>
        <ul className="filter-list">
          <li className="active" onClick={AllHandler}>
            All
          </li>
          <li onClick={activeHandler}>Active</li>
          <li onClick={ComplatedHandler}>Complated</li>
        </ul>
        <button onClick={clearAllComplated}>Clear Complated</button>
      </div>
    </>
  );
}

export default Filter;
