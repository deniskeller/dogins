import { BaseContainer, BaseTitle } from '@base/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './HeaderCountry.module.scss';

type Props = {
	image?: string;
	title: string;
	background_position?: string;
};

const HeaderCountry: React.FC<Props> = ({
	image,
	title,
	background_position = 'center',
}) => {
	const router = useRouter();
	return (
		<>
			<div
				className={s.HeaderBg}
				style={{
					backgroundImage: `url(/images/image/${
						image || 'main-header-bg.jpeg'
					})`,
					backgroundPosition: background_position,
				}}
			></div>

			<div className={s.Wrapper}>
				<BaseContainer className={s.BaseContainer}>
					<div className={s.Header}>
						<div className='animate__animated animate__fadeInLeft'>
							<div className={s.Header_Title} onClick={() => router.back()}>
								<svg
									width='37'
									height='37'
									viewBox='0 0 37 37'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className={s.Header_Title_BtnBack}
								>
									<path
										d='M29.2923 21.5833L18.5007 32.375M18.5007 32.375L7.70898 21.5833M18.5007 32.375L18.5007 4.625'
										stroke='white'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>

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

export default HeaderCountry;
