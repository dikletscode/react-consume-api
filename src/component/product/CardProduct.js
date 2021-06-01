import React, { useState } from "react";

const GetData = ({ data }) => {
  return (
    <div className='container pt-5'>
      <div className='row row-cols-1 row-cols-md-5 g-4'>
        {data.map((item) => (
          <div className='col'>
            <div className='card h-100'>
              <img src={item.gambar} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{item.nama_produk}</h5>
                <p className='card-text'>{item.deksripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GetData;
