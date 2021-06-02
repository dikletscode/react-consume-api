import axios from "axios";
import React, { useEffect, useState, useReducer } from "react";
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
        setProduct(res.data), setTotal(Math.ceil(res.data[0].total / 5)), setLoading(false);
      });
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [page]);
  const spinner = (vis) => {
    return (
      <div
        className={`${vis} spinner-border  mx-auto text-danger m-5 `}
        style={{ width: "10rem", height: "10rem" }}
        role='status'
      ></div>
    );
  };

  return (
    <>
      <div>{loading == true ? spinner("d-block") : spinner("d-none ")}</div>

      <CardProduct data={product} />
      <Pagination props={props} page={page} total={total} />
    </>
  );
};
export default Product;
