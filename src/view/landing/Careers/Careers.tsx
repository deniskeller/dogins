import { BaseContainer } from '@base/index';
import { Header } from '@content/landing/index';
import { About, Feedback, Vacancies } from 'components/landing/pages/Careers';
import React from 'react';

const Careers: React.FC = () => {
	return (
		<>
			<Header image='careers-header-bg.jpeg' title='Careers' />
			<div className='Wrapper'>
				<BaseContainer>
					<About />
					<Vacancies />
					<Feedback />
				</BaseContainer>
			</div>
		</>
	);
};

export default Careers;
