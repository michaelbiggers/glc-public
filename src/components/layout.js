import * as React from 'react';
import './global.scss';
import './flexboxgrid.min.css';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Header></Header>
			<div>
				{children}
			</div>
			<Footer></Footer>
		</div>
	)
}
export default Layout;