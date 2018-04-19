import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import WelcomeMessage from './WelcomeMessage';


const GridLeft = ({ addItem, loadUsers, user }) => (
  <div className="flex-column d-flex col-5 align-items-start">
    <Form
      addItem={addItem}
      loadUsers={loadUsers}
    />

    {
      !!user &&
      <WelcomeMessage
        user={user}
      />
    }
  </div>
);

GridLeft.propTypes = {
  addItem: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,

  user: PropTypes.instanceOf(Object),
};

GridLeft.defaultProps = {
  user: null,
};

export default GridLeft;
