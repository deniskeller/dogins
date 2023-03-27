import { Header } from '@content/landing/index';
import { About, Advantages } from 'components/landing/pages/Main';

const Main = () => {
	return (
		<>
			<Header
				image='main-header-bg.jpeg'
				title='WELCOME TO DOQINS & PARTNERS FAMILY OFFICE THE FINANCIAL EXPERTS
								SINCE 2005'
			/>

			<About />
			<Advantages />
		</>
	);
};

export default Main;
