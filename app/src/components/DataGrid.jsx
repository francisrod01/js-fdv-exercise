import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCountryInfo, getDateFormatted } from '../utils';


class DataGrid extends Component {
  componentWillMount() {
    const { loadUsers } = this.props;

    loadUsers();
  }
  renderContentGrid() {
    const { onClickGridItem } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="border border-dark col-sm font-weight-bold">Name</div>
          <div className="border border-dark col-sm font-weight-bold">Country</div>
          <div className="border border-dark col-sm font-weight-bold">Birthday</div>
        </div>
        <div className="row">
          { Object.values(this.props.users).map(user => (
            <div className="container" key={user._id}>{/* eslint-disable-line no-underscore-dangle */ }
              <div
                className="row"
                onClick={() => onClickGridItem(user)}
                onKeyPress={() => null}
                role="row"
                tabIndex={-1}
              >
                <div className="border col-4 col-sm">{`${user.name} ${user.surname}`}</div>
                <div className="border col-4 col-sm">{ getCountryInfo(user.country, 'name') }</div>
                <div className="border col-4 col-sm">{ getDateFormatted(user.birthday, 'MM/DD/YYYY') }</div>

                <div className="w-100" />
              </div>
            </div>
          )) }
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="col-sm col-lg-12 text-left">
        { this.renderContentGrid() }
      </div>
    );
  }
}

DataGrid.propTypes = {
  loadUsers: PropTypes.func.isRequired,
  onClickGridItem: PropTypes.func.isRequired,

  users: PropTypes.instanceOf(Array),
};

DataGrid.defaultProps = {
  users: [],
};


export default DataGrid;
