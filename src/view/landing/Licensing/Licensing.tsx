import { Header } from '@content/landing/index';
import { About, Information, Map } from 'components/landing/pages/Licensing';

const Licensing: React.FC = () => {
	return (
		<>
			<Header image='licensing-header-bg.jpeg' title='Licensing' />
			<div className='Wrapper'>
				<About />
				<Map />
				<Information />
			</div>
		</>
	);
};

export default Licensing;
