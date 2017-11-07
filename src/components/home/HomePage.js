import React, {Component} from 'react'
import TableauReport from 'tableau-react';

export default class HomePage extends Component{
  render(){
    return (
    <div className="container">
      <h1>Dashboard</h1>
      <TableauReport url="http://public.tableau.com/views/RegionalSampleWorkbook/Storms" />
    </div>
    );
  }
}
