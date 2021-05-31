import React, { useEffect, useRef, useState } from 'react';
import './Pagination.css'
import {Link}from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Pagination = ({totalItem,click}) =>{
  const paging = ()=>{
    let pag = [];
    
    for(let b =1;b<=totalItem;b++){

        pag.push(
      <li className="page-item" onClick={click}><Link to="/">{b}</Link></li>
      )
    }
    return pag
  }
    return(
        <nav aria-label="Page navigation example " >
          <ul className="pagination justify-content-center ">
          <li className="page-item"><Link to="/">befora</Link></li>
          {paging()}
          <li className="page-item"><Link to="/">after</Link></li>
          </ul>
        </nav>
    )}
export default Pagination;