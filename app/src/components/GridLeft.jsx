import React from 'react';

import Form from './Form';
import WelcomeMessage from './WelcomeMessage';


const GridLeft = () => (
  <div className="flex-column d-flex align-items-start">
    <Form />
    <WelcomeMessage />
  </div>
);

export default GridLeft;
