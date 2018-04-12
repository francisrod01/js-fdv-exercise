import React from 'react';

import 'bootstrap-css-only'; // eslint-disable-line
import './statics/styles/App.css';

import Header from './components/Header';
import Form from './components/Form';

const App = () => (
  <div className="App">
    <Header />

    <Form />
  </div>
);

export default App;
