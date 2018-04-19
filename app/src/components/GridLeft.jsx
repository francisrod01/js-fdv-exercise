import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import WelcomeMessage from './WelcomeMessage';


const GridLeft = ({
  addItem, loadUsers, convertToDate, getDateFormatted, calculateAge, user,
}) => (
  <div className="flex-column d-flex col-5 align-items-start">
    <Form
      addItem={addItem}
      loadUsers={loadUsers}
      convertToDate={convertToDate}
    />

    {
      !!user &&
      <WelcomeMessage
        user={user}

        getDateFormatted={getDateFormatted}
        calculateAge={calculateAge}
      />
    }
  </div>
);

GridLeft.propTypes = {
  addItem: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  convertToDate: PropTypes.func.isRequired,
  getDateFormatted: PropTypes.func.isRequired,
  calculateAge: PropTypes.func.isRequired,

  user: PropTypes.instanceOf(Object),
};

GridLeft.defaultProps = {
  user: null,
};

export default GridLeft;
