import React from 'react';

import 'bootstrap-css-only'; // eslint-disable-line
import './statics/styles/App.css';

import Header from './components/Header';
import GridLeft from './components/GridLeft';
import GridRight from './components/GridRight';


const App = () => (
  <div className="App">
    <Header />

    <div className="d-flex mt-2 justify-content-center App-intro">
      <GridLeft />
      <GridRight />
    </div>

  </div>
);

export default App;
