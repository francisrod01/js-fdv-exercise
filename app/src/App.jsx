import React, { Component } from 'react';

import Api from './api';

import 'bootstrap-css-only'; // eslint-disable-line
import './statics/styles/App.css';

import Header from './components/Header';
import GridLeft from './components/GridLeft';
import GridRight from './components/GridRight';


const addItem = item => Api.addItem(item);

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

            user={user}
          />

          <GridRight
            loadUsers={this.loadUsers}
            onClickGridItem={this.onClickGridItem}

            user={user}
            users={users}
          />
        </div>

      </div>
    );
  }
}

export default App;
