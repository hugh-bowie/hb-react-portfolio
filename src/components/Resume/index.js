import React from 'react';

function Resume() {
	return (
		<section class='mb-5'>
			<h1 className='resume'>resume: Hugh Bowie</h1>
			<hr></hr>
			<div class='row justify-content-center' id='resume'>
				<div class='mt-5 pl-5 pr-5'>
					Director of technology and full stack developer with experience in C#, MERN and MEAN stacks. Experienced in commercial process automation and internal software development. Hugh is an
					experienced leader with a demonstrated history directing and innovating international commercial collection and recovery. Prior experience as a Firefighter / Paramedic for Marion County Fire
					Rescue for seven years.
					<p class='mt-5'>
						<a href='https://www.linkedin.com/in/hugh-bowie-618a6a215/'>
							<img src='https://img.icons8.com/color/48/000000/linkedin-2.png' alt='Hugh Bowie LinkedIn' />
						</a>
					</p>
					<p>
						Download my full{' '}
						<a href='https://github.com/hugh-bowie/hb-react-portfolio/raw/master/src/assets/hb-resume.pdf' class='link'>
							resume
						</a>
						<br></br>
					</p>
				</div>
			</div>

			<div class='justify-content-center mt-5'>
				<div id='front-back'>
					<h2>front end experience</h2>
					<p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
				</div>

				<div id='front-back' class='mt-5'>
					<h2>back end experience</h2>
					<p>Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)</p>
				</div>
			</div>
		</section>
	);
}

export default Resume;
