import React from 'react';
import workWithMe from '../WorkWithMe/workWithMe.scss'

const WorkWithMe = () => {

return (
	<div
		style={{
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		}}
	>
		<div>
			<div style={{
				fontFamily: "var(--font-family-primary)",
				fontSize: "var(--font-size-title)",
				lineHeight: "var(--line-height-title)",
				color: "var(--color-text)",
				boxDecorationBreak: "clone",
				backgroundSize: "100% 5%",
				backgroundPosition: "0 85%",
				padding: "4px",
				marginLeft: "-4px",
			}}>
				<h5 style={{color: "rgb(22, 160, 133)"}}>About me</h5>
				<p style={{fontSize: "x-large"}}>
					I am a software engineer with a great passion for community, diverse problem solving, and aesthetics.
				</p>
			</div>
		</div>
		<div
			style={{
				fontFamily: "var(--font-family-primary)",
				fontSize: "var(--font-size-title)",
				lineHeight: "var(--line-height-title)",
				color: "var(--color-text)",
				boxDecorationBreak: "clone",
				backgroundSize: "100% 5%",
				backgroundPosition: "0 85%",
				padding: "4px",
				marginLeft: "-4px",
				alignItems: 'center',
			}}
		
		>
			<h5 style={{color: "rgb(22, 160, 133)"}}>
				Projects I have worked on
			</h5>
			<div style={{display: "flex", flexDirection: "column", textDecoration: "none", alignItems: 'center'}}>
				<a className='link' href='https://www.zengines.ai/'>Zengines AI</a>
				<a className='link' href='https://www.theflybook.com/'>The Flybook</a>
				<a className='link' href='https://www.auddia.com/'>Auddia</a>
			</div>
		</div>
		<div
			style={{
				fontFamily: "var(--font-family-primary)",
				fontSize: "var(--font-size-title)",
				lineHeight: "var(--line-height-title)",
				color: "var(--color-text)",
				boxDecorationBreak: "clone",
				backgroundSize: "100% 5%",
				backgroundPosition: "0 85%",
				padding: "4px",
				marginLeft: "-4px",
				alignItems: 'center',
		}}>
				<h5 style={{color: "rgb(22, 160, 133)"}}>
					Let's get in touch
				</h5>
				<div style={{display: "flex", flexDirection: "column", textDecoration: "none", alignItems: 'center'}}>
					<a className='link' href='https://www.linkedin.com/in/razaljaf/'>LinkedIn</a>
					<a className='link' href='https://github.com/ThatoneKurdishSE'>Github</a>
				</div>
		</div>
	</div>
	);
};

export default WorkWithMe;
