import React, { useEffect, useRef, useState } from "react";

import "./filter.css";
import axios from "axios";
import apiUrl from "../../services/api_url";

function Filter() {
  const [data, setData] = useState([]);
  const allFilters = useRef([]);
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
    await axios.delete(`${apiUrl}`);
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
  useEffect(() => {
    let arrOfEl = document.querySelectorAll(".filter-list li");

    arrOfEl.forEach((el) => {
      el.addEventListener("click", (e) => {
        arrOfEl.forEach((el) => {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
      });
    });
  }, []);
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
