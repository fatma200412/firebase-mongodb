"use client";

import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

type Props = {};

const Students = (props: Props) => {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/api/students").then((res) => {
      setUserdata(res.data);
    });
  }, []);

  return (
    <>
      <h1>Users MongoDB</h1>
      <br />
      <ul>
        {userdata &&
          userdata.map((elem, i) => {
            return <li key={i}> {elem.username} </li>;
          })}
      </ul>
    </>
  );
};

export default Students;
