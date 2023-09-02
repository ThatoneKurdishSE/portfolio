import React from 'react';
import pic from '../visuals/personalPics/pic.jpeg'
import Box from '../atoms/Box/Box.js';

const Home = () => {

	return (
	<div
		style={{
				display: 'flex',
				justifyContent:'space-evenly',
		}}>
		<div
			style={{
				display: 'flex',
				justifyContent: 'left',
				alignItems: 'left',
			}}
			>
				<Box />
		</div>
		<div
		style={{
			display: 'flex',
			justifyContent: 'right',
			alignItems: 'right',
			height: '90vh'
		}}
		>
			<img src={pic} alt='pic' style={{height: '90vh', borderTopLeftRadius: '350px', borderTopRightRadius: '350px'}} />
		</div>
	</div>
	);
};

export default Home;
