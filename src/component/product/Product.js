import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Product.css'
import Pagination from './Pagination';


const Product = () =>{
    const [product,setProduct] = useState([]);
    const [page,setPage] = useState(1)
    
    useEffect( ()=>{
        axios.get(`http://localhost:3000/produk?page=${page}`)
        .then(res=>(
            setProduct(res.data)
            ))
        .catch(err=>(
            console.log(err)
        ))
    })
    return(
        <div>
            {product.map(item=>(
                <div className="product">
                    <img src={item.gambar} alt={item.nama_produk}/>
                    <p>{item.nama_produk}</p>
                    <p>{item.harga}</p>
                </div>
            ))}
            <Pagination/>
        </div>
    )
}
export default Product;