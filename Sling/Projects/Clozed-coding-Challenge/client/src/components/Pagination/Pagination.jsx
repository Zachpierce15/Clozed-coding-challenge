import React from 'react';
import PropTypes from 'prop-types'
import './Pagination.scss';

function Pagination(props) {
  const {currentPage, changePage} = props;

  const changingPages = (option) => {
    window.scrollTo({top: 0,behavior: `smooth`});
    changePage(currentPage, option);
  }
  return (
    <div className="button-container">
      {currentPage === 1 ? null : <button className="each-button" onClick={() => changingPages()}>Previous Page</button>}
      {currentPage === 14 ? null : <button className="each-button" onClick={() => changingPages('next')}>Next Page</button>}
    </div>
  )
}

export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
}