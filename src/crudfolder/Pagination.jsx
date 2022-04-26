import React from "react";

const Pagination = ({ prepage, crpage, paginate }) => {
  let pageNum = [];
  let totalPage = Math.ceil(crpage / prepage);

  for (let i = 1; i <= totalPage; i++) {
    pageNum.push(i);
  }
  return (
    <div className="paginationBlock">
      {pageNum.map(num => {
        return (
          <>
            <button className="pageBtn" onClick={() => paginate(num)}>
              Page {num}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Pagination;
