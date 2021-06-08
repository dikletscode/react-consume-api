import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/CardProduct.css";
import { Context } from "../../App";

const GetData = ({ data }) => {
  return (
    <Context.Consumer>
      {(value) => {
        {
          console.log(value.idProduk, "idid");
        }
        return (
          <>
            <div className='container'>
              <h3 className='title'> Flash Sale</h3>
              <div className='row'>
                {data.map((item) => (
                  <div className='col-md-3 col-sm-6'>
                    <div className='container-inside'>
                      <div className='container-img'>
                        <a href='#'>
                          <img className='pic-1' src={item.gambar} />
                          <img className='pic-2' src={item.gambar} />
                        </a>
                        <ul className='describe'>
                          <li>
                            <Link
                              onClick={value.setIdProduk((p) => "aku")}
                              to={`/${item.id_produk}`}
                            >
                              <a href='' data-tip='Detail'>
                                <i className='fa fa-search'></i>
                              </a>
                            </Link>
                          </li>
                          <li>
                            <a href='' data-tip='lihat nanti'>
                              <i className='fa fa-shopping-bag'></i>
                            </a>
                          </li>
                          <li>
                            <a href='' data-tip='Tambahkan ke Keranjang'>
                              <i className='fa fa-shopping-cart'></i>
                            </a>
                          </li>
                        </ul>
                        <span className='label-produk'>Sale</span>
                        <span className='label-diskon'>20%</span>
                      </div>
                      <ul className='rating'>
                        <li className='fa fa-star'></li>
                        <li className='fa fa-star'></li>
                        <li className='fa fa-star'></li>
                        <li className='fa fa-star'></li>
                        <li className='fa fa-star '></li>
                      </ul>
                      <div className='produk-deks'>
                        <h3 className='title'>
                          <a href='#'>{item.nama_produk}</a>
                        </h3>
                        <div className='price'>
                          {`IDR. ${item.harga}`}
                          <span>{item.harga + 50000}</span>
                        </div>
                        <a className='teks' href=''>
                          + Tambahkan ke Keranjang
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      }}
    </Context.Consumer>
  );
};

export default GetData;
