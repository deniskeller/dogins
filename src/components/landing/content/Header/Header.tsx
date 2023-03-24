import { BaseContainer } from '@base/index';
import React from 'react';
import s from './Header.module.scss';

type Props = {
	image: string;
	title: string;
};

const Header: React.FC<Props> = ({ image, title }) => {
	return (
		<>
			<div
				className={s.HeaderBg}
				style={{
					backgroundImage: `url(/images/image/${
						image || 'main-header-bg.jpeg'
					})`,
				}}
			></div>

			<div className={s.Wrapper}>
				<BaseContainer className={s.Container}>
					<div className={s.Header}>
						<div className={s.Header_Title}>
							<h1>{title || 'Что-то пошло не так!'}</h1>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Header;
