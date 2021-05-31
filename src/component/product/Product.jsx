import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Product.css'
// import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


const Product = () =>{
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1);
    const [total,setTotal] = useState(1)
    const next = () =>{
        if(page<total){
            setPage(p=>p+1)

        }
        
    }

    useEffect( ()=>{
        axios.get(`http://localhost:3000/produk?page=${page}`)
        .then(res=>(
            setProduct(res.data),
            setTotal(Math.ceil(res.data[0].total/5))
            ))
 
        .catch(err=>(
            console.log(err)
        ))
    })
    const increment = () =>{
        if(page<total){
            setPage(p=>p+1)
        }else{
            setPage(total)
        }

    }
    const decrement = () =>{
        if(page>0){
            setPage(p=>p-1)
        }else{
            setPage(1)
        }
        
    }



    return(
        <>
        <div>
        {total}
            {product.map(item=>(
                <div className="product">
                    <img src={item.gambar} alt={item.nama_produk}/>
                    <p>{item.nama_produk}</p>
                    <p>{item.harga}</p>
                    <p>{item.total}</p>
                </div>
            ))}         
           {/* <Pagination totalItem={total} click={next}  />{page} */}
                <nav aria-label="Page navigation example " >
                    <ul className="pagination justify-content-center ">
                        <li className="page-item" onClick={decrement}><Link to="/">befora</Link></li>
                        <li className="page-item" onClick={increment}><Link to="/">after</Link></li>
                    </ul>
                </nav>
        </div>
      </>
    )
}
export default Product;