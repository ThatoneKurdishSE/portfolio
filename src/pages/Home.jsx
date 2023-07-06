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
			height: '90vh',
		}}
		>
		<h5 style={{fontFamily: '"Gill Sans", sans-serif', fontSize: "35px", fontWeight: '350', color: '#d4f1d482'}}>
			Welcome to my virtual space, I'm Raz!
			<br/>
			I find joy in
			<div style={{fontFamily: '"Gill Sans", sans-serif', fontWeight: '100', justifyItems: 'stretch'}}>
				<h2>
					creating,
				</h2>
				<h4>
					engineering,
				</h4>
				<h2 fontWeight='100px'>
					pomegranates and R&B,
				</h2>
				<h3 fontWeight='20px'>
					leading and helping,
				</h3>
				and
				<h2>
					learning new languages.
				</h2>
			</div>
		</h5>
	</div>
	<div
	style={{
		display: 'flex',
		justifyContent: 'right',
		alignItems: 'right',
		height: '90vh'
	}}
	>
		<img src={pic} alt='pic' style={{height: '90vh', borderTopLeftRadius: '350px', borderTopRightRadius: '350px'}}>
		
		</img>
	</div>
</div>
);
};

export default Home;
