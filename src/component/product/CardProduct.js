import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style/CardProduct.css";
import { Context } from "../../App";

const GetData = ({ data, klik }) => {
  const [idProduk, setIdProduk] = useContext(Context);

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
                    <li onClick={() => setIdProduk(item.id_produk)}>
                      <Link
                        data-tip='Detail'
                        onClick={klik}
                        to={{ pathname: `/${item.id_produk}`, state: item }}
                      >
                        <i className='fa fa-search'></i>
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
};

export default GetData;
