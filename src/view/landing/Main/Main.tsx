import { Header } from '@content/landing/index';
import { About, Advantages, Partners } from 'components/landing/pages/Main';

const Main: React.FC = () => {
	return (
		<>
			<Header
				image='main-header-bg.jpeg'
				title='WELCOME TO DOQINS & PARTNERS FAMILY OFFICE THE FINANCIAL EXPERTS
								SINCE 2005'
			/>
			<About />
			<Advantages />
			<Partners />
		</>
	);
};

export default Main;
