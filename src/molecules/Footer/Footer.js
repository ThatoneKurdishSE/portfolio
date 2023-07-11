import React from "react";
// {useState} 
import {
Box,
Row,
Column,
FooterLink,
Heading,
// ContactButton
} from "./FooterStyles";
// import Modal from '../Modal/Modal'

const Footer = () => {

	// const [showModal, setShowModal] = useState(false);

	// const openModal = () => {
	// 	setShowModal(true);
	// };

return (
	<Box>
	<h5 style={{ color: "white",
				fontFamily: "Gill Sans,sans-serif",
				textAlign: "flex-start",
				fontWeight: 'lighter',
				}}>
			You made it down here, I am actively working on easter eggs for this experience. Drop a text.
	</h5>
	<Row>
	<Column>
		<Heading>About Raz</Heading>
		<FooterLink href="home">My Mission</FooterLink>
		<FooterLink href="creations">Creating</FooterLink>
		<FooterLink href="writings">Words I write</FooterLink>
		{/* <ContactButton onClick={openModal}>Contact Us</ContactButton>
		{showModal ? <Modal setShowModal={setShowModal} /> : null} */}
	</Column>
	</Row>
	</Box>
);
};
export default Footer;
