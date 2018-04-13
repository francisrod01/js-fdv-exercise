import React from 'react';

import Form from './Form';
import WelcomeMessage from './WelcomeMessage';


const GridLeft = () => (
  <div className="float-left col-sm-5 col-lg-5">
    <Form />
    <WelcomeMessage />
  </div>
);

export default GridLeft;
