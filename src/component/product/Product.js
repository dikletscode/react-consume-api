import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Product.css'


const Product = () =>{
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/produk')
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
        </div>
    )
}
export default Product;