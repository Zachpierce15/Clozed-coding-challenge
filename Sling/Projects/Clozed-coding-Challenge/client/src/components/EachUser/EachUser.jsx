import React from 'react';
import PropTypes from 'prop-types';
import './EachUser.scss';

function EachUser(props) {

  const {closeUser, user} = props;
  const {dob, location, name, email, phone, picture} = user;
  const {date} = dob;

  const getDob = () => {
    let month = date.slice(8,10);
    let day = date.slice(5,7);
    let year = date.slice(0,4);

    return `${day}/${month}/${year}`
  }

  const getName = () => {
    let fullName = name.first + ' ' + name.last;

    return fullName;
  }

  const getAddress = () => {
    const {street, city, postcode, state} = location;

    let streetName = `${street.number} ${street.name},`
    let cityState = `${city}, ${state},`
    let zipCode = `${postcode}`

    return (
      <div className="item-content">
        <span>{streetName}</span>
        <span>{cityState}</span>
        <span>{zipCode}</span>
      </div>
    )
  }
  console.log(user);
  return (
    <div className="profile-container">
      <div className="image-close">
        <img src={picture.large} alt="Profile Pic"/>
        <span onClick={() => closeUser(null)}>X</span>
      </div>
        <div className="content">

          <div className="item-list">

            <div className="item">
              <span className="catagory">Employee:</span>
              <span className="item-content">{getName()}</span>
            </div>

            <div className="item">
              <span className="catagory">Email:</span>
              <span className="item-content">{email}</span>
            </div>

            <div className="item">
              <span className="catagory">Address:</span>
              {getAddress(location)}
            </div>

          </div>
          <div className="item-list-2">
            <div className="item">
              <span className="catagory">Date of Birth:</span>
              <span className="item-content">{getDob()}</span>
            </div>
            <div className="item">
              <span className="catagory">Phone:</span>
              <span className="item-content">{phone}</span>
            </div>
          </div>
        </div>

    </div>
  );
};

export default EachUser

EachUser.propTypes = {
  closeUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}