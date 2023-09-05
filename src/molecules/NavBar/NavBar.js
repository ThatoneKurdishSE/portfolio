import React from 'react';
import {
Nav,
NavLink,
NavMenu,
} from './NavbarElements'

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to='/writings' >
			Writings
		</NavLink>
		<NavLink to='/creations' >
			Creations
		</NavLink>
		<NavLink to='/' >
			Home
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
