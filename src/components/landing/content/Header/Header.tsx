import { BaseContainer, BaseTitle } from '@base/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Header.module.scss';

type Props = {
	image: string;
	title: string;
};

const Header: React.FC<Props> = ({ image, title }) => {
	const router = useRouter();
	console.log('router.pathname ', router.pathname);

	return (
		<>
			<div
				className={`${s.HeaderBg} ${router.pathname === '/' ? s.FullSize : ''}`}
				style={{
					backgroundImage: `url(/images/image/${
						image || 'main-header-bg.jpeg'
					})`,
				}}
			></div>

			<div
				className={`${s.Wrapper} ${router.pathname === '/' ? s.FullSize : ''}`}
			>
				<BaseContainer className={s.Container}>
					<div className={s.Header}>
						<div className='animate__animated animate__fadeInLeft'>
							<div className={s.Header_Title}>
								<BaseTitle type='h1'>
									{title || 'Что-то пошло не так!'}
								</BaseTitle>
							</div>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Header;
