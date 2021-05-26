import React, { useState } from 'react';
import './Pagination.css'


const Pagination = () =>{
  const [page,setPage] = useState(1)



1
  // const paging = (page) =>{

  //   return(
  //     <a></a>
  //   )
  // }

  



    return(
    <div className="center">
        <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="/1" className="active" >1</a>
        <a href="/2" >2</a>
        <a href="/3">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
        </div>
      </div>
    )
}
export default Pagination;