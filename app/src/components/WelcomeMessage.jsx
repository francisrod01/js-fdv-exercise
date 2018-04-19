import React from 'react';
import PropTypes from 'prop-types';


const WelcomeMessage = ({
  user, user: { name, country, birthday }, calculateAge, getDateFormatted,
}) => (
  <div className="m-sm-2">
    <div className="alert alert-success">
      {
        !!user &&
          `Hello ${name}
          from ${country}
          of ${getDateFormatted(birthday, 'MMMM')} 
          you will have ${calculateAge(birthday)} years.`
      }
    </div>
  </div>
);

WelcomeMessage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    birthday: PropTypes.string,
  }).isRequired,
  calculateAge: PropTypes.func.isRequired,
  getDateFormatted: PropTypes.func.isRequired,
};


export default WelcomeMessage;
