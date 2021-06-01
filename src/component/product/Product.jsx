import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Product.css";
import Pagination from "./Pagination";
import CardProduct from "./CardProduct";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(true);

  const props = {
    increment: () => {
      setPage((p) => p + 1);
    },
    decrement: () => {
      setPage((p) => p - 1);
    },
  };

  const getData = async () => {
    try {
      await axios.get(`http://localhost:3000/produk?page=${page}`).then((res) => {
        setProduct(res.data), setTotal(Math.ceil(res.data[0].total / 5));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <CardProduct data={product} />
      <Pagination props={props} page={page} total={total} />
      {loading}
    </>
  );
};
export default Product;
