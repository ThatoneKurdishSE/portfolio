import styled from 'styled-components';

export const Box = styled.div`
background: #00000036;
width: 100%;
height: 100%;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
padding: 32px;
`;

export const Row = styled.div`
display: flex;
grid-template-columns: repeat(auto-fill,
	minmax(15px, 1fr));
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 14px;
text-decoration: none;
&:hover {
	color: gray;
	transition: 200ms ease-in;
}
padding-left: 4px;
font-family: "Gill Sans", sans-serif;
`;

export const Heading = styled.p`
font-size: 18px;
font-weight: light;
color: #fff;
font-family: "Gill Sans", sans-serif;
`;
export const ContactButton = styled.button`
border-radius: 4px;
background: black;
text-align: left;
color: white;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
font-family: "Gill Sans", sans-serif;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #6f6870;
}
`;