import React from 'react';


const DataGrid = () => (
  <div className="container border border-light">
    <div className="row">
      <div className="col-sm">Name</div>
      <div className="col-sm">Country</div>
      <div className="col-sm">Birthday</div>
    </div>
    <div className="row">
      <div className="col-sm">Mariano Suarez</div>
      <div className="col-sm">Argentina</div>
      <div className="col-sm">12/05/1988</div>
      <div className="w-100" />
      <div className="col-sm">Jose Kim</div>
      <div className="col-sm">Argentina</div>
      <div className="col-sm">11/05/1988</div>
    </div>
  </div>
);

export default DataGrid;
