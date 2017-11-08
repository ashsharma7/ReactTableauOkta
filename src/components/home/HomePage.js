import React, {Component} from 'react'
import TableauReport from 'tableau-react';

// http://public.tableau.com/views/RegionalSampleWorkbook/Storms"

export default class HomePage extends Component{
  render(){
    return (
    <div className="container">
      <h1>Dashboard</h1>
      <TableauReport 
      		url="https://us-east-1.online.tableau.com/t/sometrial/views/ExecutiveSalesforce/QuotaAttainment?:embed=y&:showAppBanner=false&:showShareOptions=true&:display_count=no&:showVizHome=no"
      />
    </div>
    );
  }
}
