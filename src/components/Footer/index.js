import React from 'react';

function Footer() {
	return (
		<div class='footer' id='footer'>
			<a href='https://github.com/hugh-bowie'>
				<img src='https://img.icons8.com/color/48/000000/github-2.png' alt='Github' class='icon' />
			</a>
			<a href='https://linkedin.com/in/hugh-bowie-618a6a215'>
				<img src='https://img.icons8.com/color/48/000000/linkedin.png' alt='LinkedIn' class='icon' />
			</a>
			<a href='https://stackoverflow.com/users/9411574/hughbowie'>
				<img src='https://img.icons8.com/color/48/000000/stackoverflow.png' alt='Stack Overflow' class='icon' />
			</a>
			<p>
				&copy; Hugh Bowie |{' '}
				<a href='https://github.com/hugh-bowie/hb-react-portfolio/raw/master/src/assets/hb-resume.pdf' class='link'>
					Download Resume
				</a>{' '}
				| <a href='https://coolors.co/dad7cd-cfd6c2-cfdece-38573d-101915'>Color Palette Used</a> | Made With{' '}
				<img id='react-icon' src='https://img.icons8.com/color/48/000000/react-native.png' alt='React' />
			</p>
		</div>
	);
}

export default Footer;
