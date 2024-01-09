"use client";

import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "@/app/firebase/config";
import { useState, useEffect } from "react";

type Props = {};

interface Product {
  id: string;
  name: string;
}

const Products = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getDataRealtime = async () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "products/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setProducts(data);
    });
  };

  useEffect(() => {
    getDataRealtime();
  }, []);

  return (
    <>
      <h1>Products Realtime</h1>
      <br />
      <ul>
        {products &&
          products.map((product, i) => {
            return <li key={i}> {product.name} </li>;
          })}
      </ul>
    </>
  );
};

export default Products;
