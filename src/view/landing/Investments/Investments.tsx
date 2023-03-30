import { Header } from '@content/landing/index';
import { About, CompanyCards } from 'components/landing/pages/Investments';

const Investments: React.FC = () => {
	return (
		<>
			<Header image='investments-header-bg.jpeg' title='Investments' />
			<div className='Wrapper'>
				<About />
				<CompanyCards />
			</div>
		</>
	);
};

export default Investments;
