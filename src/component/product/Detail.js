import React, { useState, useContext } from "react";
import { Context } from "../../App";
import { useLocation } from "react-router-dom";
import "./style/Detail.css";

const Detail = () => {
  const data = useLocation();
  const item = data.state;

  return (
    <div className='container'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src={item.gambar} className='card-img' alt='...' />
          </div>
          <div className='col-md-3'>
            <div className='card-body'>
              <h5 className='card-title'>{item.nama_produk}</h5>
              <p className='card-text'>{item.deksripsi}</p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
