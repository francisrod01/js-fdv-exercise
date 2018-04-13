import React from 'react';


const DataGrid = () => (
  <div className="col-sm col-lg-12 text-left border border-primary">
    <div className="container">
      <div className="row">
        <div className="col-sm font-weight-bold">Name</div>
        <div className="col-sm font-weight-bold">Country</div>
        <div className="col-sm font-weight-bold">Birthday</div>
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
  </div>
);

export default DataGrid;
