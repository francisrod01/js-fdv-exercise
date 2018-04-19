import React from 'react';
import PropTypes from 'prop-types';

import DataGrid from './DataGrid';
import CompleteName from './CompleteName';


const GridRight = ({
  loadUsers, onClickGridItem, user, users,
}) => (
  <div className="flex-column d-flex align-items-stretch">
    <DataGrid
      loadUsers={loadUsers}
      onClickGridItem={onClickGridItem}

      users={users}
    />

    <CompleteName
      user={user}
    />
  </div>
);

GridRight.propTypes = {
  loadUsers: PropTypes.func.isRequired,
  onClickGridItem: PropTypes.func.isRequired,

  user: PropTypes.instanceOf(Object),
  users: PropTypes.instanceOf(Array),
};

GridRight.defaultProps = {
  user: null,
  users: [],
};


export default GridRight;
