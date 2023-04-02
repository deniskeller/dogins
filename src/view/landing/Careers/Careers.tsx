import { BaseContainer } from '@base/index';
import { Header } from '@content/landing/index';
import { About } from 'components/landing/pages/Careers';
import React from 'react';

const Careers: React.FC = () => {
	return (
		<>
			<Header image='careers-header-bg.jpeg' title='Careers' />
			<div className='Wrapper'>
				<BaseContainer>
					<About />
				</BaseContainer>
			</div>
		</>
	);
};

export default Careers;
