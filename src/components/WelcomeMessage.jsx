import React from 'react';


const WelcomeMessage = () => (
  <div className="m-sm-2 m-lg-5">
    <div className="alert alert-success">
      {'Hello {Name} from {Country} of {month} you will have {years}.'}
    </div>
  </div>
);

export default WelcomeMessage;
