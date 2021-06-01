import React from "react";
import "./Pagination.css";

const Pagination = ({ props, page, total }) => {
  const limit = {
    before: page <= 1 ? "disabled" : " ",
    after: page >= total ? "disabled" : " ",
  };
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className={`page-item ${limit.before}`}>
          <a className='page-link' onClick={props.decrement} tabIndex='-1'>
            Previous
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            1
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            2
          </a>
        </li>
        <li className='page-item '>
          <a className='page-link' href='#'>
            3
          </a>
        </li>
        <li className={`page-item ${limit.after}`}>
          <a className='page-link' onClick={props.increment}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
