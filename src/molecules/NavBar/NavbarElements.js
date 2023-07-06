import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
height: 100%;
width: 100%;
display: flex;
justify-content: space-between;
`;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    font-family: "Gill Sans", sans-serif;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
// margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
margin-bottom: 8px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: black;
padding: 10px 22px;
color: white;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-family: "Gill Sans", sans-serif;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #6f6870;
}
`;