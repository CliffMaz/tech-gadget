import React from "react";

function Pagination(props) {
  console.log(props.numbers);
  return (
    <ul className="pagination">
      <li className="page-item">
        <a href="" className="page-link" onClick={() => props.prevPage()}>
          Prev
        </a>
      </li>
      {props.numbers.map((num, index) => {
        <li className={`page-item `} key={index}>
          <a
            href=""
            className="page-link"
            onClick={() => props.changecurrentPage(num)}
          >
            {num}
          </a>
        </li>;
      })}
      <li className="page-item">
        <a href="" onClick={() => props.nextPage()}>
          Next
        </a>
      </li>
    </ul>
  );
}

export default Pagination;
