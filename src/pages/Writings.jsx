import React from 'react';
import BlogCard from '../atoms/Box/Card/BlogCard';

const Writings = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'left',
		height: '100vh'
	}}
	>
		<BlogCard />
	</div>
);
};

export default Writings;
