import { BaseContainer, BaseTitle } from '@base/index';
import Image from 'next/image';
import React from 'react';
import s from './Header.module.scss';

type Props = {};

const Header: React.FC<Props> = () => {
	return (
		<>
			<div className='Wrapper'>
				<BaseContainer>
					<div className={s.Header}>
						<div className={s.Header_Content}>
							<div className='animate__animated animate__fadeInLeft'>
								<BaseTitle className={s.Header_Content_Title}>
									Compliance
								</BaseTitle>
							</div>

							<div className={s.Header_Content_Description}>
								<p>
									With us now you have access to corporate information and
									official company documents in almost all countries in the
									world.
								</p>
								<p>
									Information is based only on official / Government sources and
									can be utilized for KYC/KYB purposes.
								</p>
								<p>
									Validate Corporate/Personal Identity Online:&nbsp;
									<span>Fast, Accurate, Responsible.</span>
								</p>
							</div>
						</div>

						<div className={s.Header_Image}>
							<div className={s.Image}>
								<Image
									src='/images/image/compliance-header-image.jpeg'
									layout='fill'
									alt={''}
									priority
								/>
							</div>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Header;
