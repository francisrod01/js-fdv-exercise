import React, { Component } from 'react';
import dateFns from 'date-fns';

import Api from './api';

import 'bootstrap-css-only'; // eslint-disable-line
import './statics/styles/App.css';

import Header from './components/Header';
import GridLeft from './components/GridLeft';
import GridRight from './components/GridRight';


const addItem = item => Api.addItem(item);

const convertToDate = (timeString) => {
  const date1 = new Date(timeString);

  return date1.toISOString();
};

const getDateFormatted = (stringDate, format) => {
  const newDate = new Date(stringDate);
  const dateFormatted = dateFns.format(newDate, format);

  return dateFormatted;
};

/**
 * Birthday calculation
 *
 * @link https://stackoverflow.com/a/21984136/3332734
 * @param {*} stringDate
 */
const calculateAge = (stringDate) => {
  const birthdate = new Date(stringDate).getTime();
  const today = Date.now();
  const ageDiffMs = today - birthdate;
  const ageDate = new Date(ageDiffMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      users: [],
    };


    // Define bindables
    this.onClickGridItem = this.onClickGridItem.bind(this);
    this.loadUsers = this.loadUsers.bind(this);
  }
  onClickGridItem(user) {
    this.setState({
      user,
    });
  }
  loadUsers() {
    Api.loadUsers()
      .then((res) => {
        this.setState({ users: res.data });
      });
  }
  render() {
    const { user, users } = this.state;
    return (
      <div className="App">
        <Header />

        <div className="d-flex mt-2 justify-content-center App-intro">
          <GridLeft
            addItem={addItem}
            loadUsers={this.loadUsers}
            convertToDate={convertToDate}
            getDateFormatted={getDateFormatted}
            calculateAge={calculateAge}

            user={user}
          />

          <GridRight
            loadUsers={this.loadUsers}
            onClickGridItem={this.onClickGridItem}
            getDateFormatted={getDateFormatted}

            user={user}
            users={users}
          />
        </div>

      </div>
    );
  }
}

export default App;
