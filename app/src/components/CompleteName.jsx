import React from 'react';
import PropTypes from 'prop-types';


const CompleteName = ({ user }) => (
  <div className="m-sm-2">
    <div className="m-sm-2 text-right">
      { !!user && `${user.name} ${user.surname}`}

      { !user && 'Your Name and Last Name' }
    </div>
  </div>
);

CompleteName.propTypes = {
  user: PropTypes.instanceOf(Object),
};

CompleteName.defaultProps = {
  user: null,
};


export default CompleteName;
