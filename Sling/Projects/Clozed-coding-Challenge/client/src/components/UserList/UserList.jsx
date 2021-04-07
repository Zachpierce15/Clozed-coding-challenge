import React from 'react';
import User from '../User/User';
import Pagination from '../Pagination/Pagination';
import PropTypes from 'prop-types';

import './UserList.scss';


function UserList (props) {
  const {users, setUser, currentPage, changePage} = props;

  return (
    <div>
      {users.length > 0 ? (
        <div>
          <h1>Employees</h1>
          <div className="page-number">
            <span>{currentPage} of 14 pages 7,000 total results</span>
          </div>
          <div className="all-users-container">
          {users.map((user, index) => {
            return <User user={user} key={index} setUser={setUser} />
          })}
          </div>
          <Pagination currentPage={currentPage} changePage={changePage} />
        </div>
      ): <h1>Loading...</h1>}

    </div>
  )
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
}