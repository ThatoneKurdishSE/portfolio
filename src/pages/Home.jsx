import React from 'react';
import pic from '../visuals/personalPics/pic.jpeg'

const Home = () => {

return (
<div style={{
	display: 'flex',
	justifyContent:'space-evenly',
}}>
	<div
		style={{
			display: 'flex',
			justifyContent: 'left',
			alignItems: 'left',
			height: '100vh'
		}}
		>
		<h5 style={{fontFamily: '"Gill Sans", sans-serif', fontSize: "40px", fontWeight: 'lighter'}}>
			Hi there, I'm Raz! Welcome to my virtual space. I like
			<div style={{fontFamily: '"Gill Sans", sans-serif', fontWeight: 'lighter', justifyItems: 'stretch'}}>
				<h2>
					Creating
				</h2>
				<h4>
					Engineering
				</h4>
				<h5>
					Pomegranates and poetry
				</h5>
				<h3>
					Leading and helping
				</h3>
				<h5>
					learning new languages
				</h5>
			</div>
		</h5>
	</div>
	<div
	style={{
		display: 'flex',
		justifyContent: 'right',
		alignItems: 'right',
		height: '100vh'
	}}
	>
		<img src={pic} alt='pic' style={{height: '100vh', borderTopLeftRadius: '10px'}}>
		
		</img>
	</div>
</div>
);
};

export default Home;
