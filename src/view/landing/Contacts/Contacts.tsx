import { Header } from '@content/landing/index';
import s from './Contacts.module.scss';

const Contacts: React.FC = () => {
	return (
		<>
			<Header image='contacts-header-bg.jpeg' title='Contact us' />
			<div className='Wrapper'>
				<div className={s.Contacts}></div>
			</div>
		</>
	);
};

export default Contacts;
