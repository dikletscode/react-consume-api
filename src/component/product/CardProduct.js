import React, { useState } from "react";
import "./CardProduct.css";

const GetData = ({ data }) => {
  return (
    <div class='row row-cols-1 row-cols-md-5 g-4'>
      {data.map((item) => (
        <div class='col'>
          <div class='card h-100 m-1 p-3'>
            <img src={item.gambar} class='card-img-top gam' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>Card title</h5>
              <p class='card-text'>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </p>
            </div>
            <div class='card-footer'>
              <small class='text-muted'>Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default GetData;
