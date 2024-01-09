"use client";

import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/app/firebase/config";
type Props = {};

interface User {
  id: string;
  name: string;
}

const Users = (props: Props) => {
  const [datas, setDatas] = useState<User[]>([]);

  let users: User[] = [];
  const getData = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "datas"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());

      let obj: User = {
        id: doc.id,
        name: doc.data().name,
      };

      users.push(obj);
      setDatas(users);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <br />
      <ul>
        {datas &&
          datas.map((user, i) => {
            return <li key={i}> {user.name} </li>;
          })}
      </ul>
    </>
  );
};

export default Users;
