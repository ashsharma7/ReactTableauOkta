import React from 'react';
import TableauReport from 'tableau-react';
import Tableau from 'tableau-api';


export default class TableauPage extends React.Component{
	render(){
		return (
			<div>
				<Tableau url='https://public.tableau.com/views/Top100TableauPublicViews-Q1Q2-2010good/Viewdetail?:embed=y&:loadOrderID=0&:display_count=no' />
			</div>
		);
	}
}