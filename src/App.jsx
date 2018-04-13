import React from 'react';

import 'bootstrap-css-only'; // eslint-disable-line
import './statics/styles/App.css';

import Header from './components/Header';
import Form from './components/Form';
import DataGrid from './components/DataGrid';


const App = () => (
  <div className="App">
    <Header />

    <div className="d-flex mt-2 justify-content-center App-intro">
      <Form />

      <DataGrid />
    </div>

  </div>
);

export default App;
