import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

function User (props) {
  const {user, setUser} = props;
  const {email,location,name} = user;
  return (
    <div className="user-container">
      <div className="meta-data">
        <span className="user-name" onClick={() => setUser(user)}>{' ' + name.first + ' ' + name.last}</span>
      </div>

      <div className="email-city">

        <div className="pairs">
          <span className="type">Email: </span>
          <span className="user-email-city">{email}</span>
        </div>

        <div className="pairs">
          <span className="type">City/Country: </span>
          <span className="user-email-city">{location.city + ', ' + location.state}</span>
        </div>

      </div>


    </div>
  )
}

export default User;

User.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
}