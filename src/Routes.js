// import { Router, Route } from 'react-router';
import ROUTES from './constants/ROUTES.js';
import React from 'react';
import Root from './js/components/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Breads from './js/components/Breads';
import OurStory from './js/components/OurStory';
import Photos from './js/components/Photos';
import ContactUs from './js/components/ContactUs';
import PathDNE from './js/components/PathDNE';

console.log('ROUTES =>', ROUTES);

class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter history={ BrowserRouter }>
				<Switch>
					<Route path='/' component={ App } exact />
					<Route path='/home' component={ Root } />
					<Route path='/breads' component={ Breads } />
					<Route path='/contact_us' component={ ContactUs } />
					<Route component={ PathDNE }/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Routes;