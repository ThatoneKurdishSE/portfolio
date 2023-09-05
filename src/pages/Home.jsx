import React from 'react';
import pic from '../visuals/personalPics/pic.jpeg'
import Box from '../atoms/Box/Box.js';
import InfoCard from '../atoms/Card/Info/InfoCard';

const Home = () => {

	return (
		<div>

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
					height: '70vh'
				}}
				>
					<img src={pic} alt='pic' style={{borderTopLeftRadius: '350px', borderTopRightRadius: '350px'}} />
				</div>
			</div>
			<InfoCard />
		</div>
	);
};

export default Home;
