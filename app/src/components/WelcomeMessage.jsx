import React from 'react';
import PropTypes from 'prop-types';


const WelcomeMessage = ({ user, user: { name, country, birthday } }) => (
  <div className="m-sm-2">
    <div className="alert alert-success">
      {
        !!user &&
          `Hello ${name}
          from ${country}
          of ${birthday} 
          you will have ${birthday} years.`
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
};


export default WelcomeMessage;
