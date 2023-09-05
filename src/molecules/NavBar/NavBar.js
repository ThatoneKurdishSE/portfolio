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
		<NavLink to='/' >
			Home
		</NavLink>
		<NavLink to='/writings' >
			Writings
		</NavLink>
		<NavLink to='/creations' >
			Creations
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
