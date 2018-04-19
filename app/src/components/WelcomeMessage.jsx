import React from 'react';
import PropTypes from 'prop-types';

import { getCountryInfo, calculateAge, getDateFormatted } from '../utils';


const WelcomeMessage = ({ user, user: { name, country, birthday } }) => (
  <div className="m-sm-2">
    <div className="alert alert-success">
      {
        !!user &&
          `Hello ${name}
          from ${getCountryInfo(country, 'name')}
          of ${getDateFormatted(birthday, 'MMMM')} 
          you will have ${calculateAge(birthday)} years.`
      }
    </div>
  </div>
);

WelcomeMessage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.object,
    birthday: PropTypes.string,
  }).isRequired,
};


export default WelcomeMessage;
