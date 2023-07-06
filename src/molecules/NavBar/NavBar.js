import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements'

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to='/about' >
			About
		</NavLink>
		<NavLink to='/blogs' >
			Blogs
		</NavLink>
		<NavLink to='/creations' >
			Creations
		</NavLink>
		<NavLink to='/home' >
			Home
		</NavLink>
		</NavMenu>
		<NavBtn>
			<NavBtnLink to='/workwithme'>Work With Me</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
