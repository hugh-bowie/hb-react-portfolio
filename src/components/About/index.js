import React from 'react';

function About() {
	return (
		<section className='title'>
			<h1 class='name'>about: Hugh Bowie IV</h1>
			<hr></hr>

			<div className='row justify-content-center'>
				<div className='col-10' id='about-section'>
					<img class='mb-5' src='https://github.com/hugh-bowie/hb-react-portfolio/raw/main/src/assets/images/hugh-bowie.jpg' alt='Hugh Bowie' />
					<p>Director of technology and full stack developer with experience in C#, MERN and MEAN stacks.</p>
					<p>Experienced in commercial process automation and internal software development.</p>
					<p>Hugh is an experienced leader with successful history directing and innovating international commercial collection and recovery.</p>
					<p>Prior experience as a Firefighter / Paramedic for Marion County Fire Rescue for seven years.</p>
					<p>View full{' '}
						<a href='#/resume' class='link'>Resume</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
