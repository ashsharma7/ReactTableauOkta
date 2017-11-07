import React from 'react';
import TableauReport from 'tableau-react';
import Tableau from 'tableau-api';

const CONSTANTS = {
  VIZ_URL: 'https://public.tableau.com/views/Top100TableauPublicViews-Q1Q2-2010good/Viewdetail?:embed=y&:loadOrderID=0&:display_count=no'
};

const SimpleReport = props => (
  <TableauReport
    url={VIZ_URL,};
    // token="<TRUSTED TICKET HERE>"
  />
)

render(){

}