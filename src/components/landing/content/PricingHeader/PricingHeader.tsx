import { BaseContainer } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import s from './PricingHeader.module.scss';

type Props = {
	image: string;
	title: string;
};

const PricingHeader: React.FC<Props> = ({ image, title }) => {
	const router = useRouter();

	return (
		<>
			<div className={s.Wrapper}>
				<div
					className={s.Background}
					style={{
						backgroundImage: `url(/images/image/${
							image || 'main-header-bg.jpeg'
						})`,
					}}
				></div>
				<div className={s.Gradient}></div>

				<BaseContainer className={s.BaseContainer}>
					<div className={s.Header}>
						<BreadCrumbs
							roorHref=''
							rootPathName=''
							className={s.Header_BreadCrumbs}
						/>

						<div className={s.Header_Body}>
							<div className={s.Title}>
								<h1>{title}</h1>
							</div>

							<div className={s.Navbar}>
								<Link href='/pricing-information/financial-licensing'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[2] == 'financial-licensing'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[2] ==
														'financial-licensing'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													Financial <br /> Licensing
												</span>
											</div>
											{router.pathname.split('/')[2] ==
											'financial-licensing' ? (
												<div className={s.Navbar_Item_Subtitle}>
													<span>
														Please select the serviceyou are interested in below
													</span>
												</div>
											) : null}

											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[2] ==
														'financial-licensing'
															? 'none'
															: 'block',
												}}
											></div>

											<svg
												width='23'
												height='23'
												viewBox='0 0 23 23'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className={`${s.Navbar_Item_Icon} ${
													router.pathname.split('/')[2] == 'financial-licensing'
														? s.Navbar_Item_Icon_Active
														: ''
												}`}
											>
												<path
													d='M21.8207 0.609165L21.8207 21.8224M21.8207 21.8224L0.607525 21.8224M21.8207 21.8224L0.606601 0.608243'
													stroke='#2D2D2D'
													strokeOpacity='0.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</a>
								</Link>

								<Link href='/pricing-information/compliance-software'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[2] == 'compliance-software'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[2] ==
														'compliance-software'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													Compliance <br /> Software
												</span>
											</div>
											{router.pathname.split('/')[2] ==
											'compliance-software' ? (
												<div className={s.Navbar_Item_Subtitle}>
													<span>
														Please select the service you are interested in
														below
													</span>
												</div>
											) : null}

											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[2] ==
														'compliance-software'
															? 'none'
															: 'block',
												}}
											></div>

											<svg
												width='23'
												height='23'
												viewBox='0 0 23 23'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className={`${s.Navbar_Item_Icon} ${
													router.pathname.split('/')[2] == 'compliance-software'
														? s.Navbar_Item_Icon_Active
														: ''
												}`}
											>
												<path
													d='M21.8207 0.609165L21.8207 21.8224M21.8207 21.8224L0.607525 21.8224M21.8207 21.8224L0.606601 0.608243'
													stroke='#2D2D2D'
													strokeOpacity='0.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</a>
								</Link>

								<Link href='/pricing-information/payment-software'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[2] == 'payment-software'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[2] == 'payment-software'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													Payment <br />
													Software
												</span>
											</div>
											{router.pathname.split('/')[2] == 'payment-software' ? (
												<div className={s.Navbar_Item_Subtitle}>
													<span>
														Please select the service you are interested in
														below
													</span>
												</div>
											) : null}

											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[2] == 'payment-software'
															? 'none'
															: 'block',
												}}
											></div>

											<svg
												width='23'
												height='23'
												viewBox='0 0 23 23'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className={`${s.Navbar_Item_Icon} ${
													router.pathname.split('/')[2] == 'payment-software'
														? s.Navbar_Item_Icon_Active
														: ''
												}`}
											>
												<path
													d='M21.8207 0.609165L21.8207 21.8224M21.8207 21.8224L0.607525 21.8224M21.8207 21.8224L0.606601 0.608243'
													stroke='#2D2D2D'
													strokeOpacity='0.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</a>
								</Link>

								<Link href='/pricing-information/support-services'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[2] == 'support-services'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[2] == 'support-services'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													Support <br />
													Services
												</span>
											</div>
											{router.pathname.split('/')[2] == 'support-services' ? (
												<div className={s.Navbar_Item_Subtitle}>
													<span>
														Please select the service you are interested in
														below
													</span>
												</div>
											) : null}

											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[2] == 'support-services'
															? 'none'
															: 'block',
												}}
											></div>

											<svg
												width='23'
												height='23'
												viewBox='0 0 23 23'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
												className={`${s.Navbar_Item_Icon} ${
													router.pathname.split('/')[2] == 'support-services'
														? s.Navbar_Item_Icon_Active
														: ''
												}`}
											>
												<path
													d='M21.8207 0.609165L21.8207 21.8224M21.8207 21.8224L0.607525 21.8224M21.8207 21.8224L0.606601 0.608243'
													stroke='#2D2D2D'
													strokeOpacity='0.5'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default PricingHeader;
