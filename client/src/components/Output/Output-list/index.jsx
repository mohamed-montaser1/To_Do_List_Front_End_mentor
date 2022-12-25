import React, { useState, useEffect } from "react";
import OutputItem from "../Output-item";
import "./output.css";
import apiUrl from "../../../services/api_url";
import axios from "axios";

function Output() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllTasks() {
      const res = await axios.get(`${apiUrl}/all`);
      const allTasks = res.data.allTasks;
      setData(allTasks);
    }

    getAllTasks();
  }, [data]);

  useEffect(() => {
    async function getComplated() {
      const res = await axios.get(`${apiUrl}/complated`);
      const data = res.data;
      // console.log(data);
    }

    getComplated();
  }, []);

  useEffect(() => {
    async function getActive() {
      const res = await axios.get(`${apiUrl}/active`);
      const data = res.data;
      // console.log(data);
    }

    getActive();
  }, []);

  return (
    <>
      <div className="output-list">
        {data?.map((task) => {
          return (
            <OutputItem
              complated={task.complated}
              key={task._id}
              id={task._id}
              title={task.title}
            />
          );
        })}
      </div>
    </>
  );
}

export default Output;
