import React from 'react';
import pemaDemo from '../visuals/demos/pema-demo.mov';

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
			<p>Pema, a multiligual library of meditations. Created with React Native</p>
			<video width="500px" height="500px" controls="controls">
				<source src={pemaDemo} type="video/mp4" />
			</video>
		</div>
	</div>
);
};

export default Creations;
