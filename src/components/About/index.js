import React from 'react';

function About() {
	return (
		<section className='title'>
			<h1 class='name'>about: Hugh Bowie IV</h1>
			<hr></hr>

			<div className='row justify-content-center'>
				<div className='col-10' id='about-section'>
					<img class='mb-5' src='https://github.com/hugh-bowie/hb-react-portfolio/src/assets/images/hugh-bowie.jpg' alt='Hugh Bowie' />
					<p>sentance 1</p>
					<p>sentance 2</p>
					<p>sentance 3</p>
					<p>sentance 4</p>
					<p>sentance 5</p>
					<p>
						View full{' '}
						<a href='#/resume' class='link'>
							resume
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
