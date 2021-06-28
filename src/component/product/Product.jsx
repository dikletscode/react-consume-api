import axios from "axios";
import React, { useEffect, useState, useReducer, useContext } from "react";
import "./style/Product.css";
import { spinner } from "../Spinner";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import CardProduct from "./CardProduct";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [loading, setLoading] = useState(true);
  const [single, setSingleItem] = useState([]);

  const props = {
    increment: () => {
      setPage((p) => p + 1);
    },
    decrement: () => {
      setPage((p) => p - 1);
    },
  };

  const getAllData = async () => {
    try {
      await axios

        .get(`http://localhost:3000/produk?page=${page}`)
        .then((res) => {
          setProduct(res.data), setTotal(Math.ceil(res.data[0].total / 8)), setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, [page]);

  return (
    <>
      <div>{loading == true ? spinner("d-block") : spinner("d-none ")}</div>
      <CardProduct data={product} />
      <Pagination props={props} page={page} total={total} />
      {/* <button onClick={() => getData(`${idProduk}`)}>{console.log(single)}aaaa</button> */}
    </>
  );
};
export default Product;
