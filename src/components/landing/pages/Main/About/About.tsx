//@ts-nocheck
import { BaseContainer, BaseIcon, BaseText, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React, { useEffect, useRef, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import s from './About.module.scss';

type Props = {};

const About: React.FC<Props> = () => {
	const refLogo = useRef<HTMLDivElement | null>();
	const refLogoWrapper = useRef<HTMLDivElement | null>();

	const [width, setWidth] = useState('');
	const [height, setHeight] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			//максимальная ширина блока
			var maxW = +!window
				.getComputedStyle(refLogo.current)
				.getPropertyValue('min-width')
				.split('px')[0];
			//минимальная ширина блока
			var minW = +!window
				.getComputedStyle(refLogo.current)
				.getPropertyValue('max-width')
				.split('px')[0];
			//разница мин и макс ширины блока
			var deltaW = maxW - minW;

			// var blockH = refLogo.current?.clientHeight;
			var blockH = refLogo?.current?.clientHeight;
			var pageH = refLogoWrapper.current?.clientHeight + blockH;
			var blockX = refLogo?.current?.offsetTop + blockH;
			var width = Math.round(((pageH - blockX) * deltaW) / pageH);

			if (blockX >= 0 && blockX <= pageH) {
				setWidth(minW + width);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {};
	}, []);

	return (
		<>
			<div className='Wrapper'>
				<BaseContainer>
					<div className={s.About}>
						<div className={s.About_Logo} ref={refLogoWrapper}>
							<div
								className={s.Logo}
								ref={refLogo}
								style={{
									width: `${width}px`,
								}}
							>
								<BaseIcon icon={ALL_ICONS.LOGO} viewBox='0 0 280 316' />
							</div>
						</div>

						<div className={s.About_Body}>
							<div className={s.About_Body_About}>
								<div className={s.Logo}>
									<BaseIcon icon={ALL_ICONS.LOGO} viewBox='0 0 280 316' />
								</div>

								<BaseTitle type='h1' className={s.Title}>
									UNIFIED SOLUTIONS RIGHT OUT OF THE BOX
								</BaseTitle>

								<div className={s.Row}>
									<BaseText>
										The Doqins & Partners Limited was established as the
										professional consultancy office based on the family
										experience and international career. Over the decade the
										business was growing, and the company has established a
										strong international presence.
									</BaseText>
								</div>

								<div className={s.Columns}>
									<BaseText>
										Our heart will always be in New York, but we are also
										present in London. The team of experts has practical
										knowledge and successful business experience in finance,
										information technologies, e-commerce, compliance and
										financial law. The COVID-19 remove pandemic has changed the
										world and how all of us are operating, because of that we
										have also changed.
									</BaseText>

									<BaseText>
										Now we are offering personalized remote approach, customer
										service and delivery success. The most valuable resource
										that we value is time, and each of our customer is treated
										this way.
									</BaseText>
								</div>
							</div>

							<AnimationOnScroll
								animateIn='animate__fadeIn animate__delay-1s'
								animateOnce
							>
								<div className={s.About_Body_Members}>
									<div className={s.Col}>
										<div className={s.Title}>
											<span>
												<h3>We are</h3>
											</span>
											<h1>Members of</h1>
										</div>
									</div>

									<div className={s.Col}>
										<div className={s.Company}>
											<div className={s.Company_Icon}>
												<svg
													width='100'
													height='83'
													viewBox='0 0 100 83'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<g opacity='0.8'>
														<path
															d='M14.9052 15.8051H0.576172V41.1566V66.508H14.9052V36.1965C11.2679 34.1573 9.22873 32.504 8.01627 31.1813L5.8118 28.8666C10.4963 31.512 12.5354 32.504 13.3621 32.8347L14.9052 33.4409V15.8051Z'
															fill='#B49635'
														/>
														<path
															d='M32.4308 15.9153L19.3693 15.75L19.4795 25.2843L19.5898 34.8187C24.2743 35.8107 27.581 36.1414 29.8957 36.1414L34.1944 36.1965V29.032C39.5402 29.032 40.5322 29.3075 41.3589 30.1342C41.9652 30.7404 42.4612 31.9529 42.4612 32.8898C42.4612 33.8267 42.7367 34.5431 43.1225 34.5431C43.5083 34.5431 44.9412 34.2676 46.319 33.9369C47.6968 33.6062 50.7831 33 53.208 32.6693L57.6169 32.008C57.3414 29.0871 56.7351 27.103 56.1289 25.7252C55.5227 24.3474 54.2551 22.3083 53.3182 21.0958C52.3262 19.9385 50.1768 18.3403 48.5235 17.5136C45.555 16.0843 45.2733 16.0807 32.5283 15.9166L32.4308 15.9153Z'
															fill='#B49635'
														/>
														<path
															d='M91.4005 40.7708L82.9684 15.8051L68.4342 15.9153C68.4342 15.9153 66.7104 20.5447 65.3326 24.623C63.9548 28.7013 62.8525 32.0631 62.8525 32.0631C62.8525 32.0631 64.3406 32.2835 66.1592 32.504C67.9779 32.7244 71.0091 33.4409 72.938 34.0471C74.8118 34.7085 77.9532 36.2516 79.9372 37.5743C81.7679 38.7947 83.9876 39.8848 84.787 41.9832C84.787 41.9832 83.4093 41.7077 82.307 40.9912C81.1497 40.3299 79.4963 39.4481 78.5594 39.0623C77.6776 38.6765 76.8509 38.5112 76.7958 38.6765C76.6856 38.8419 76.9061 39.7788 77.1816 40.7708C77.5123 41.7628 78.0083 43.9121 78.0083 43.9121H75.5283H73.3238C73.3238 43.9121 73.7096 41.9281 74.1505 40.4952C74.5914 39.0623 74.8118 37.7396 74.5914 37.6294C74.3158 37.4641 72.2215 36.9681 69.9069 36.5272C67.537 36.0312 64.6712 35.6454 63.569 35.6454H61.4747C53.8693 58.5168 51.0677 66.508 51.0677 66.508H58.8845L66.4348 66.5631C66.4348 66.5631 69.0802 57.6901 69.2455 57.3043C69.4108 56.7532 71.1193 56.643 75.6385 56.7532L81.7559 56.8634L84.787 66.5631L99.9512 66.508C99.9512 66.508 96.0299 54.4936 91.4005 40.7708Z'
															fill='#B49635'
														/>
														<path
															d='M57.3414 37.5743C57.4516 36.5823 57.7822 35.7005 57.3414 35.6454C56.9005 35.5903 54.2551 36.0863 52.1057 36.472C50.0115 36.9129 46.3741 37.6845 44.1145 38.1805C41.3038 38.8419 37.5562 39.1725 32.2655 39.1725C28.0219 39.2276 23.3925 39.0623 21.9596 38.8419L19.3142 38.401V66.508H34.1944V51.6278C45.2168 51.4074 46.4292 51.1869 48.7439 49.9744C50.2319 49.2029 52.1608 47.7149 53.0977 46.6677C54.0346 45.6206 55.3573 43.5264 56.0187 41.9832C56.68 40.4952 57.2862 38.5112 57.3414 37.5743Z'
															fill='#B49635'
														/>
													</g>
												</svg>
											</div>
											<div className={s.Company_Label}>
												<span>Innovative Payments Association</span>
											</div>
										</div>
									</div>

									<div className={s.Col}>
										<div className={s.Company}>
											<div className={s.Company_Icon}>
												<svg
													width='61'
													height='83'
													viewBox='0 0 61 83'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<g opacity='0.8'>
														<path
															d='M19.3963 33.9609C15.8955 33.9609 13.043 36.7949 13.043 40.2729C13.043 43.7509 15.8955 46.5848 19.3963 46.5848C22.8971 46.5848 25.7496 43.7509 25.7496 40.2729C25.7496 36.7949 22.8971 33.9609 19.3963 33.9609Z'
															fill='#B49635'
														/>
														<path
															d='M41.5682 34.0234C38.0673 34.0234 35.2148 36.8574 35.2148 40.3354C35.2148 43.8134 38.0673 46.6473 41.5682 46.6473C45.069 46.6473 47.9215 43.8134 47.9215 40.3354C47.9215 36.8574 45.069 34.0234 41.5682 34.0234Z'
															fill='#B49635'
														/>
														<path
															d='M0.5 11.3203V70.9294H60.5V11.3203H0.5ZM19.3979 50.4156C16.9992 50.4156 14.795 49.5783 13.0446 48.1936V58.1445H9.18721V40.2715C9.18721 34.668 13.7577 30.1273 19.3979 30.1273C25.0381 30.1273 29.6086 34.668 29.6086 40.2715C29.6086 45.8749 25.0057 50.4156 19.3979 50.4156ZM51.7804 50.4478H47.923V48.2902C46.1726 49.6749 43.9684 50.5122 41.5697 50.5122C35.9295 50.5122 31.359 45.9715 31.359 40.3681C31.359 34.7646 35.9295 30.2239 41.5697 30.2239C47.2099 30.2239 51.7804 34.7646 51.7804 40.3681V50.4478Z'
															fill='#B49635'
														/>
														<path
															d='M19.3963 33.9609C15.8955 33.9609 13.043 36.7949 13.043 40.2729C13.043 43.7509 15.8955 46.5848 19.3963 46.5848C22.8971 46.5848 25.7496 43.7509 25.7496 40.2729C25.7496 36.7949 22.8971 33.9609 19.3963 33.9609Z'
															fill='#B49635'
														/>
														<path
															d='M41.5682 46.6473C45.077 46.6473 47.9215 43.8214 47.9215 40.3354C47.9215 36.8494 45.077 34.0234 41.5682 34.0234C38.0593 34.0234 35.2148 36.8494 35.2148 40.3354C35.2148 43.8214 38.0593 46.6473 41.5682 46.6473Z'
															fill='#B49635'
														/>
													</g>
												</svg>
											</div>
											<div className={s.Company_Label}>
												<span>The payments association</span>
											</div>
										</div>
									</div>

									<div className={s.Col}>
										<div className={s.Company}>
											<div className={s.Company_Icon}>
												<svg
													width='292'
													height='83'
													viewBox='0 0 292 83'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<g opacity='0.8' clipPath='url(#clip0_8431_173878)'>
														<path
															d='M259.397 40.7504L275.38 17.6156L291.167 40.7504H259.397Z'
															fill='#B49635'
															stroke='#2D2D2D'
															strokeWidth='0.75'
														/>
														<path
															d='M242.695 17.3281H274.666L258.681 40.4657L242.695 17.3281Z'
															fill='#B49635'
															stroke='#2D2D2D'
															strokeWidth='0.75'
														/>
														<path
															d='M259.397 41.5H291.167L275.38 64.6348L259.397 41.5Z'
															fill='#B49635'
															stroke='#2D2D2D'
															strokeWidth='0.75'
														/>
														<path
															d='M242.695 64.9223L258.681 41.7847L274.666 64.9223H242.695Z'
															fill='#B49635'
															stroke='#2D2D2D'
															strokeWidth='0.75'
														/>
														<path
															d='M219.555 36.3556C211.853 33.8003 210.489 31.7974 210.489 28.8968C210.489 25.7198 213.352 24.0623 216.965 24.0623C220.646 24.0623 224.94 26.2724 227.258 29.5183L233.12 23.2336C229.234 18.4682 224.94 15.8438 216.965 15.8438C208.24 15.8438 201.151 21.7832 201.151 29.7946C201.151 36.5628 204.832 41.052 214.034 43.9526C222.35 46.577 224.667 48.1655 224.667 52.0331C224.667 56.5913 220.714 57.9035 217.51 57.9035C212.602 57.9035 208.99 55.21 204.968 50.6518L199.311 57.2128C203.673 62.8761 209.194 66.3983 217.033 66.3983C227.394 66.3983 234.006 59.9063 234.006 50.7209C234.006 44.5742 230.257 39.8779 219.555 36.3556Z'
															fill='#B49635'
														/>
														<path
															d='M110.699 16.9531L92.7715 65.2976H102.11L105.882 54.8H124.634L128.364 65.2976H137.839L119.901 16.9531H110.699ZM108.79 46.6505L115.284 28.5282L121.725 46.6505H108.79Z'
															fill='#B49635'
														/>
														<path
															d='M70.8917 57.4891C62.712 57.4891 57.0545 51.8949 57.0545 41.6045C57.0545 31.314 63.0529 24.753 70.7554 24.753C76.2766 24.753 80.0256 27.1702 83.5702 31.7974L89.7731 25.0983C84.9334 18.9516 79.4122 15.8438 71.028 15.8438C57.5316 15.8438 47.4434 26.2033 47.4434 41.6045C47.4434 57.0056 57.0544 66.3983 70.619 66.3983C78.1171 66.3983 85.8196 62.3235 90.3184 55.9697L84.5245 49.6849C80.7073 54.7266 75.8677 57.4891 70.8917 57.4891Z'
															fill='#B49635'
														/>
														<path
															d='M17.9271 16.9531L0 65.2976H9.33844L13.0988 54.8H31.8507L35.5815 65.2976H45.0563L27.1292 16.9531H17.9271ZM16.0208 46.6505L22.5122 28.5282L28.9537 46.6505H16.0208Z'
															fill='#B49635'
														/>
														<path
															d='M167.621 39.3481L152.345 16.9531H144.029V65.2976H152.959V32.1287L167.614 53.3496L182.269 32.0435V65.2976H191.199V16.9531H183.087L167.621 39.3481Z'
															fill='#B49635'
														/>
														<path
															d='M285.088 61.8203H283.805V61.0859H287.136V61.8203H285.868V65.1814H285.088V61.8203ZM287.556 61.0859H288.294L289.771 63.0773L291.319 61.0859H292V65.1814H291.207V62.4189L289.771 64.2122L288.335 62.4028V65.186H287.556V61.0859Z'
															fill='#B49635'
														/>
													</g>
													<defs>
														<clipPath id='clip0_8431_173878'>
															<rect width='292' height='83' fill='white' />
														</clipPath>
													</defs>
												</svg>
											</div>
											<div className={s.Company_Label}>
												<span>
													Association of Certified Anti-Money Laundering
													Specialists
												</span>
											</div>
										</div>
									</div>

									<div className={s.Col}>
										<div className={s.Company}>
											<div className={s.Company_Icon}>
												<svg
													width='147'
													height='83'
													viewBox='0 0 147 83'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<g opacity='0.8'>
														<path
															fillRule='evenodd'
															clipRule='evenodd'
															d='M73.1367 71.25C113.529 71.25 146.273 57.9864 146.273 41.625C146.273 25.2636 113.529 12 73.1367 12C32.7444 12 0 25.2636 0 41.625C0 57.9864 32.7444 71.25 73.1367 71.25ZM36.1861 44.7297H26.9305L25.3086 48.5024C24.909 49.4309 24.7092 50.1244 24.7092 50.5827C24.7092 50.9471 24.8796 51.2703 25.2205 51.5524C25.5731 51.8227 26.3253 51.999 27.4771 52.0812V52.7335H19.9492V52.0812C20.9482 51.9049 21.5947 51.6758 21.8885 51.3937C22.4879 50.8295 23.1519 49.6836 23.8806 47.9559L32.29 28.2812H32.907L41.2282 48.1675C41.8981 49.7659 42.5034 50.806 43.044 51.2879C43.5964 51.758 44.3604 52.0225 45.3359 52.0812V52.7335H35.904V52.0812C36.856 52.0342 37.4966 51.8756 37.8257 51.6052C38.1665 51.3349 38.3369 51.0058 38.3369 50.618C38.3369 50.1008 38.1019 49.284 37.6317 48.1675L36.1861 44.7297ZM35.6925 43.4251L31.6377 33.7641L27.4771 43.4251H35.6925ZM60.4557 29.4801V28.8278H68.918V29.4801H68.0189C67.0786 29.4801 66.3558 29.8738 65.8504 30.6612C65.6036 31.0256 65.4802 31.8718 65.4802 33.1999V42.8962C65.4802 45.2938 65.2393 47.1567 64.7574 48.4848C64.2872 49.8011 63.3529 50.9353 61.9543 51.8873C60.5674 52.8276 58.6752 53.2977 56.2775 53.2977C53.6683 53.2977 51.6879 52.8452 50.3363 51.9402C48.9847 51.0352 48.0269 49.8188 47.4627 48.2909C47.0866 47.2449 46.8986 45.2821 46.8986 42.4026V33.0589C46.8986 31.5897 46.6929 30.626 46.2815 30.1676C45.8819 29.7092 45.2296 29.4801 44.3246 29.4801H43.4255V28.8278H53.7565V29.4801H52.8397C51.8525 29.4801 51.1473 29.7915 50.7242 30.4144C50.4304 30.8375 50.2835 31.719 50.2835 33.0589V43.478C50.2835 44.4065 50.3657 45.4701 50.5303 46.6689C50.7066 47.8678 51.018 48.8021 51.4646 49.4721C51.9113 50.142 52.5518 50.6944 53.3863 51.1292C54.2325 51.5641 55.2668 51.7815 56.4891 51.7815C58.0522 51.7815 59.4509 51.4407 60.6849 50.759C61.919 50.0773 62.7593 49.2076 63.206 48.1498C63.6643 47.0803 63.8935 45.2762 63.8935 42.7375V33.0589C63.8935 31.5662 63.729 30.6319 63.3999 30.2558C62.9415 29.7386 62.2598 29.4801 61.3549 29.4801H60.4557ZM88.9276 48.238L80.1128 39.4761L83.7621 35.8444C85.8894 33.67 87.0824 32.4653 87.3409 32.2303C88.2342 31.4076 88.9864 30.814 89.5975 30.4497C90.2087 30.0736 90.7258 29.8209 91.1489 29.6916C91.572 29.5623 92.0422 29.4918 92.5593 29.4801V28.8278H83.7797V29.4801H84.3263C84.9139 29.4801 85.3311 29.5858 85.578 29.7974C85.8248 29.9972 85.9482 30.2323 85.9482 30.5026C85.9482 30.8552 85.7895 31.2665 85.4722 31.7367C84.7435 32.8062 82.6338 34.9394 79.1431 38.1362C77.768 39.4055 76.963 40.1519 76.7279 40.3752V33.0589C76.7279 31.8836 76.7984 31.1079 76.9394 30.7318C77.0805 30.3557 77.3332 30.0736 77.6975 29.8855C78.2146 29.6152 78.7494 29.4801 79.3018 29.4801H80.1128V28.8278H69.9229V29.4801H70.7691C71.3332 29.4801 71.8739 29.6211 72.391 29.9032C72.7553 30.1147 72.9963 30.3615 73.1138 30.6436C73.2666 31.0432 73.343 31.8483 73.343 33.0589V48.5024C73.343 49.9363 73.202 50.8413 72.9199 51.2174C72.4733 51.7933 71.7563 52.0812 70.7691 52.0812H69.9229V52.7335H80.1128V52.0812H79.3018C78.7377 52.0812 78.2029 51.9402 77.6975 51.6581C77.3214 51.4466 77.0746 51.1939 76.9571 50.9001C76.8043 50.5122 76.7279 49.713 76.7279 48.5024V40.7983L84.9786 48.9608C85.6015 49.572 85.9658 49.9892 86.0716 50.2125C86.1891 50.4358 86.2479 50.6885 86.2479 50.9706C86.2479 51.2526 86.0951 51.5112 85.7895 51.7463C85.4957 51.9696 85.0079 52.0812 84.3263 52.0812V52.7335H95.6974V52.0812C94.6748 52.0107 93.6523 51.7169 92.6298 51.1998C91.6073 50.6709 90.3732 49.6836 88.9276 48.238ZM102.82 41.5387V48.5024C102.82 50.0068 102.984 50.9412 103.313 51.3055C103.76 51.8227 104.436 52.0812 105.341 52.0812H106.257V52.7335H96.0147V52.0812H96.9138C97.9246 52.0812 98.6474 51.7522 99.0822 51.094C99.3173 50.7296 99.4348 49.8658 99.4348 48.5024V33.0589C99.4348 31.5545 99.2762 30.6201 98.9588 30.2558C98.5005 29.7386 97.8188 29.4801 96.9138 29.4801H96.0147V28.8278H104.777C106.916 28.8278 108.602 29.0511 109.836 29.4977C111.07 29.9326 112.111 30.673 112.957 31.719C113.803 32.7651 114.226 34.005 114.226 35.4389C114.226 37.3899 113.58 38.9766 112.287 40.1989C111.006 41.4212 109.19 42.0324 106.839 42.0324C106.263 42.0324 105.64 41.9912 104.971 41.9089C104.301 41.8267 103.584 41.7033 102.82 41.5387ZM102.82 40.5338C103.443 40.6514 103.995 40.7395 104.477 40.7983C104.959 40.857 105.37 40.8864 105.711 40.8864C106.933 40.8864 107.985 40.4163 108.867 39.4761C109.76 38.5241 110.207 37.2959 110.207 35.7915C110.207 34.7572 109.995 33.7993 109.572 32.9178C109.149 32.0246 108.549 31.3606 107.774 30.9257C106.998 30.4791 106.116 30.2558 105.129 30.2558C104.53 30.2558 103.76 30.3674 102.82 30.5907V40.5338ZM126.655 52.7335V52.0812H125.791C125.227 52.0812 124.692 51.9402 124.187 51.6581C123.811 51.4466 123.564 51.1939 123.446 50.9001C123.294 50.5122 123.217 49.713 123.217 48.5024V33.0589C123.217 31.625 123.364 30.72 123.658 30.3439C124.105 29.768 124.816 29.4801 125.791 29.4801H126.655V28.8278H116.412V29.4801H117.258C117.823 29.4801 118.363 29.6211 118.88 29.9032C119.245 30.1147 119.486 30.3674 119.603 30.6612C119.756 31.0491 119.832 31.8483 119.832 33.0589V48.5024C119.832 49.9363 119.691 50.8413 119.409 51.2174C118.963 51.7933 118.246 52.0812 117.258 52.0812H116.412V52.7335H126.655Z'
															fill='#B49635'
														/>
													</g>
												</svg>
											</div>
											<div className={s.Company_Label}>
												<span>Association of UK Payment Institutions</span>
											</div>
										</div>
									</div>

									<div className={s.Col}>
										<div className={s.Company}>
											<div className={s.Company_Icon}>
												<svg
													width='160'
													height='83'
													viewBox='0 0 160 83'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<g opacity='0.8'>
														<path
															d='M19.0664 58.2251L32.9551 26.771H35.4434L49.2869 58.2251H46.3915L42.727 49.8374H25.6262L22.007 58.2251H19.0664ZM34.1314 30.1618L26.6668 47.4727H41.6865L34.2219 30.1618H34.1314Z'
															fill='#B49635'
														/>
														<path
															d='M54.6559 58.2251V26.771H66.6898C70.0979 26.771 72.6917 27.5741 74.4711 29.1802C76.2808 30.7864 77.1856 33.0767 77.1856 36.0511C77.1856 38.9957 76.2808 41.286 74.4711 42.9219C72.6917 44.5281 70.0979 45.3312 66.6898 45.3312H57.4156V58.2251H54.6559ZM57.4156 42.9219H66.4636C71.7416 42.9219 74.3807 40.6316 74.3807 36.0511C74.3807 31.4408 71.7416 29.1356 66.4636 29.1356H57.4156V42.9219Z'
															fill='#B49635'
														/>
														<path
															d='M95.7899 58.5821C92.7437 58.5821 90.1348 57.9426 87.9633 56.6636C85.7918 55.3549 84.1179 53.4959 82.9417 51.0866C81.7956 48.6774 81.2225 45.8071 81.2225 42.4758C81.2225 39.1742 81.7956 36.3188 82.9417 33.9095C84.1179 31.5003 85.7918 29.6561 87.9633 28.3772C90.1348 27.0684 92.7437 26.4141 95.7899 26.4141C97.9916 26.4141 100.012 26.771 101.852 27.4848C103.722 28.169 105.305 29.1802 106.602 30.5187L105.381 32.7941C103.963 31.4259 102.485 30.4444 100.947 29.8495C99.4392 29.2546 97.7352 28.9572 95.8351 28.9572C92.0953 28.9572 89.215 30.1469 87.1942 32.5264C85.2037 34.8762 84.2084 38.1926 84.2084 42.4758C84.2084 46.7886 85.2037 50.1348 87.1942 52.5143C89.215 54.8641 92.0953 56.039 95.8351 56.039C97.7352 56.039 99.4392 55.7415 100.947 55.1467C102.485 54.5518 103.963 53.5702 105.381 52.202L106.602 54.4774C105.305 55.8159 103.722 56.842 101.852 57.5559C100.012 58.24 97.9916 58.5821 95.7899 58.5821Z'
															fill='#B49635'
														/>
														<path
															d='M125.125 58.5821C122.079 58.5821 119.47 57.9426 117.299 56.6636C115.127 55.3549 113.453 53.4959 112.277 51.0866C111.131 48.6774 110.558 45.8071 110.558 42.4758C110.558 39.1742 111.131 36.3188 112.277 33.9095C113.453 31.5003 115.127 29.6561 117.299 28.3772C119.47 27.0684 122.079 26.4141 125.125 26.4141C127.327 26.4141 129.348 26.771 131.187 27.4848C133.057 28.169 134.641 29.1802 135.938 30.5187L134.716 32.7941C133.299 31.4259 131.821 30.4444 130.283 29.8495C128.775 29.2546 127.071 28.9572 125.171 28.9572C121.431 28.9572 118.55 30.1469 116.53 32.5264C114.539 34.8762 113.544 38.1926 113.544 42.4758C113.544 46.7886 114.539 50.1348 116.53 52.5143C118.55 54.8641 121.431 56.039 125.171 56.039C127.071 56.039 128.775 55.7415 130.283 55.1467C131.821 54.5518 133.299 53.5702 134.716 52.202L135.938 54.4774C134.641 55.8159 133.057 56.842 131.187 57.5559C129.348 58.24 127.327 58.5821 125.125 58.5821Z'
															fill='#B49635'
														/>
														<path
															fillRule='evenodd'
															clipRule='evenodd'
															d='M0.883446 80.1828L15.2167 3.00361L17.3848 3.40625L3.05149 80.5854L0.883446 80.1828Z'
															fill='#B49635'
														/>
														<path
															fillRule='evenodd'
															clipRule='evenodd'
															d='M142.569 80.1828L156.902 3.00361L159.07 3.40625L144.737 80.5854L142.569 80.1828Z'
															fill='#B49635'
														/>
													</g>
												</svg>
											</div>
											<div className={s.Company_Label}>
												<span>
													Association of Professional Compliance Consultants
												</span>
											</div>
										</div>
									</div>
								</div>
							</AnimationOnScroll>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default About;
