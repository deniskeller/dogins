import { BaseContainer } from '@base/index';
import React from 'react';
import s from './Widget.module.scss';

type Props = {};

const Widget: React.FC<Props> = () => {
	return (
		<>
			<div className='Wrapper'>
				<div className={s.Widget}>
					<div className={s.Widget_Header_Container}>
						<BaseContainer>
							<div className={s.Widget_Header}>
								<div className={s.Step}>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Step_Icon}
									>
										<path
											d='M16.6667 29.1667V35.4167M25 29.1667V35.4167M33.3333 29.1667V35.4167M6.25 43.75H43.75M6.25 20.8333H43.75M6.25 14.5833L25 6.25L43.75 14.5833M8.33333 20.8333H41.6667V43.75H8.33333V20.8333Z'
											stroke='white'
											strokeOpacity='0.6'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>

									<div className={s.Step_Label}>1. Type your company name</div>
								</div>

								<div className={s.Step}>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Step_Icon}
									>
										<path
											d='M6.25 43.75V35.4167M6.25 35.4167V10.4167C6.25 8.11548 8.11548 6.25 10.4167 6.25H23.9583L26.0417 8.33333H43.75L37.5 20.8333L43.75 33.3333H26.0417L23.9583 31.25H10.4167C8.11548 31.25 6.25 33.1155 6.25 35.4167ZM25 7.29167V18.75'
											stroke='white'
											strokeOpacity='0.6'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>

									<div className={s.Step_Label}>2. Choose the Jurisdiction</div>
								</div>

								<div className={s.Step}>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Step_Icon}
									>
										<path
											d='M18.7493 25H31.2494M18.7493 33.3333H31.2494M35.416 43.75H14.5827C12.2815 43.75 10.416 41.8845 10.416 39.5833V10.4167C10.416 8.11548 12.2815 6.25 14.5827 6.25H26.2197C26.7723 6.25 27.3022 6.46949 27.6929 6.86019L38.9725 18.1398C39.3632 18.5305 39.5827 19.0604 39.5827 19.6129V39.5833C39.5827 41.8845 37.7172 43.75 35.416 43.75Z'
											stroke='white'
											strokeOpacity='0.6'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>

									<div className={s.Step_Label}>3. Select Document</div>
								</div>
							</div>
						</BaseContainer>
					</div>

					<div className={s.Widget_Body}></div>
				</div>
			</div>
		</>
	);
};

export default Widget;
