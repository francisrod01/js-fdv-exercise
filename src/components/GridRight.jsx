import React from 'react';

import DataGrid from './DataGrid';
import CompleteName from './CompleteName';


const GridRight = () => (
  <div className="flex-column d-flex align-items-stretch">
    <DataGrid />
    <CompleteName />
  </div>
);

export default GridRight;
