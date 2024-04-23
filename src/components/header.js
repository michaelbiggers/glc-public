import * as React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { navigation, logo, nav__cta } from './header.module.scss'

const Header = () => {
	return (
		<nav className>
			<ul className={navigation}>
				<Link to="/">
					<StaticImage
						alt="Greenville Learning Collective"
						src="../images/logo.svg"
						className={logo}
					/>
				</Link>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/services">Services</Link></li>
				<li className={nav__cta}><a href="https://spwidget-greenvillelearningcollective.clientsecure.me/widget/clinician?channel=website&practiceId=881558" target="_blank" rel="noreferrer">Book Appointment</a></li>
			</ul>
		</nav>
	)
}
export default Header;