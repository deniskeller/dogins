import { BaseContainer } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import s from './PricingHeader2.module.scss';

type Props = {
	image: string;
	title: string;
};

const PricingHeader2: React.FC<Props> = ({ image, title }) => {
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
								<Link href='/pricing-information/support-services/website-development'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[3] == 'website-development'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[3] ==
														'website-development'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													website <br /> development
												</span>
											</div>
											{router.pathname.split('/')[3] ==
											'website-development' ? (
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
														router.pathname.split('/')[3] ==
														'website-development'
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
													router.pathname.split('/')[3] == 'website-development'
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

								<Link href='/coming-soon'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[3] == 'coming-soon'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[3] == 'coming-soon'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													company registration <br /> in United Kingdom
												</span>
											</div>
											{router.pathname.split('/')[3] == 'coming-soon' ? (
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
														router.pathname.split('/')[3] == 'coming-soon'
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
													router.pathname.split('/')[3] == 'coming-soon'
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

								<Link href='/coming-soon'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[3] == 'coming-soon'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[3] == 'coming-soon'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													physical office <br /> in united kingdom
												</span>
											</div>
											{router.pathname.split('/')[3] == 'coming-soon' ? (
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
														router.pathname.split('/')[3] == 'coming-soon'
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
													router.pathname.split('/')[3] == 'coming-soon'
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

								<Link href='/coming-soon'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[3] == 'coming-soon'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[3] == 'coming-soon'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													bank account <br />
													opening
												</span>
											</div>
											{router.pathname.split('/')[3] == 'coming-soon' ? (
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
														router.pathname.split('/')[3] == 'coming-soon'
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
													router.pathname.split('/')[3] == 'coming-soon'
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

								<Link href='/coming-soon'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[3] == 'coming-soon'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[3] == 'coming-soon'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>
													additional <br />
													financial services
												</span>
											</div>
											{router.pathname.split('/')[3] == 'coming-soon' ? (
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
														router.pathname.split('/')[3] == 'coming-soon'
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
													router.pathname.split('/')[3] == 'coming-soon'
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

								<Link href='/coming-soon'>
									<a>
										<div
											className={s.Navbar_Item}
											style={{
												background:
													router.pathname.split('/')[3] == 'coming-soon'
														? '#FFFFFF'
														: 'rgba(255, 255, 255, 0.7)',
											}}
										>
											<div
												className={s.Navbar_Item_Border}
												style={{
													display:
														router.pathname.split('/')[3] == 'coming-soon'
															? 'none'
															: 'block',
												}}
											></div>

											<div className={s.Navbar_Item_Title}>
												<span>other</span>
											</div>
											{router.pathname.split('/')[3] == 'coming-soon' ? (
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
														router.pathname.split('/')[3] == 'coming-soon'
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
													router.pathname.split('/')[3] == 'coming-soon'
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

export default PricingHeader2;
