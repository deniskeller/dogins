import { BaseContainer } from '@base/index';
import React from 'react';
import s from './About.module.scss';

type Props = {};

const About: React.FC<Props> = () => {
	return (
		<>
			<div className='Wrapper'>
				<BaseContainer>
					<div className={s.About}>
						<h1>About</h1>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default About;
