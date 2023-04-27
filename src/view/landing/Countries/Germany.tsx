import { BaseContainer } from '@base/index';
import { HeaderCountry } from '@content/landing/index';
import s from './Countries.module.scss';

const Germany: React.FC = () => {
	return (
		<>
			<HeaderCountry image='germany-bg.jpeg' title='Germany' />

			<div className='Wrapper-l'>
				<BaseContainer>
					<div className={s.Country}>
						<div className={s.Country_Title}>
							<h1>Germany</h1>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Germany;
