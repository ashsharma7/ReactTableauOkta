import React from 'react';
import TableauReport from 'tableau-react';
import Tableau from 'tableau-api';


export default class TableauPage extends React.Component{
	render(){
		return (
			<div>
				<Tableau url='https://us-east-1.online.tableau.com/#/site/servicentrixtrial/views/AnalyzeSuperstore/Product?:iid=1' />
			</div>
		);
	}
}