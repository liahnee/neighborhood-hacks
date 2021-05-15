import React from 'react';
import { Switch, withRouter, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../containers/home.js';

const Routes = () => (
	<Router>
		<Switch>
			{/* <PublicRoute path="/account" /> */}
			{/* <PublicRoute path="/" /> */}
			<Route path="/" exact component={Home} />
		</Switch>
	</Router>
);

export default Routes;
