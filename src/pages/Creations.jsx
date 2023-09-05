import React from 'react';
import pemaDemo from '../visuals/demos/pema-demo.mov';
import {Card} from '../../src/atoms/Card/Info/InfoCard'

const Creations = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'space-between',
		height: '100vh',
		padding: '16px'
	}}
	>
		<div style={{textAlign: "center",     color: "rgb(255, 255, 255)"}}>
			<p><a style={{textDecoration: 'underline',     color: "#efe4e4"}} href='https://github.com/ThatoneKurdishSE/pema-frontend'>Pema</a>, a multiligual library of meditations, created with React Native.</p>
			<video width="500px" height="500px" controls="controls">
				<source src={pemaDemo} type="video/mp4" />
			</video>
		</div>
		<Card
			title="Gallery coming soon!"
			content="I will be adding more art, travel, and other creations I am working on here, soon!"
		/>
	</div>
);
};

export default Creations;
