/**
 *
 * Pagination
 *
 */

import React from "react";
import PropTypes from "prop-types";
import cl from "classnames";

const Pagination = props => {
  const {
    currentPage,
    pages,
    onClick
  } = props;

  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  const previous = currentPage-1;
  const next = currentPage+1;

  return (
    <nav>
      <ul className="pagination">
        {currentPage>1 && <li className="page-item"><a onClick={() => onClick(previous)} className="page-link">Previous</a></li>}
        {pageNumbers.map((page, index) => (
          <li key={page} className={cl("page-item",{"active":currentPage===page})}><a className="page-link" onClick={() => onClick(page)}>{page}</a></li>
        ))}
        {currentPage<pages &&<li className="page-item"><a  onClick={() => onClick(next)} className="page-link">Next</a></li>}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  pages: PropTypes.number,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Pagination.defaultProps = {
  currentPage: undefined,
  pages: undefined,
  className: undefined,
  onClick: undefined
};

export default Pagination;
