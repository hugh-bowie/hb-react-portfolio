import React, { Component } from 'react';
import { Route, Navigate, HashRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';

class Header extends Component {
	render() {
		return (
			<HashRouter>
				<div className='row Header' id='header'>
					<a href='https://hugh-bowie.github.io/jpd-react-portfolio/'>
						<img src="https://img.icons8.com/nolan/48/react-native.png" alt='Hugh Bowie' class='icon' id='react' />

					</a>
					<Navigation />
				</div>

				<div className='content'>
					<Route exact path='/' render={() => <Navigate to='/portfolio' />} />
					<Route path='/portfolio' component={Portfolio} />
					<Route path='/about' component={About} />
					<Route path='/contact' component={Contact} />
					<Route path='/resume' component={Resume} />
				</div>
			</HashRouter>
		);
	}
}

export default Header;
