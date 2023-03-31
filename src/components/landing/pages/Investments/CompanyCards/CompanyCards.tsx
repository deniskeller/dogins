import { BaseButton, BaseContainer } from '@base/index';
import React from 'react';
import s from './CompanyCards.module.scss';

type Props = {};

const CompanyCards: React.FC<Props> = () => {
	return (
		<>
			<BaseContainer>
				<div className={s.CompanyCards}>
					<div className={s.CompanyCard}>
						<div className={s.CompanyCard_Column}>
							<div className={s.Logo}>
								<svg
									width='162'
									height='23'
									viewBox='0 0 162 23'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16.7542 15.0291C16.7542 16.9278 14.8555 17.8533 11.0282 17.8533H1.23597C0.423931 17.8533 0 17.5428 0 16.886C0 16.2292 0.465727 15.9188 1.23597 15.9188H11.064C13.112 15.9188 14.1569 15.6083 14.1569 15.0649V13.6737C14.1569 13.0945 13.112 12.8259 11.064 12.8259H5.8395C2.00621 12.7841 0.113448 11.8586 0.113448 10.0375V8.83732C0.113448 6.70573 2.0898 5.625 6.03654 5.625H9.48172C10.2938 5.625 10.7595 5.97131 10.7595 6.6281C10.7595 7.28489 10.2938 7.59538 9.48172 7.59538H6.03654C3.83329 7.59538 2.74659 7.98349 2.74659 8.83135V9.95387C2.74659 10.6525 3.86912 10.9988 6.03654 10.9988H11.2192C14.9331 10.9988 16.7901 11.8526 16.7901 13.5543V15.0231H16.7542V15.0291Z'
										fill='#DC4945'
									/>
									<path
										d='M23.7991 17.8437V21.1694C23.7991 21.868 23.3333 22.2143 22.4855 22.2143C21.5958 22.2143 21.1719 21.868 21.1719 21.1694V9.5979C21.1719 6.92893 23.3393 5.60938 27.6741 5.60938H32.7434C37.0782 5.60938 39.2457 6.92296 39.2457 9.5979V13.8551C39.2457 16.4883 37.0782 17.8437 32.7434 17.8437H23.7991ZM23.7991 15.7897H32.7374C35.2153 15.7897 36.4513 15.1329 36.4513 13.891V9.5979C36.4513 8.32014 35.2153 7.69918 32.7374 7.69918H27.5129C25.035 7.69918 23.7991 8.32014 23.7991 9.5979V15.7897Z'
										fill='#DC4945'
									/>
									<path
										d='M48.6102 17.8473C45.0098 17.8473 43.2305 16.7248 43.2305 14.5216V13.0886C43.2305 10.8853 45.0098 9.76282 48.6102 9.76282H59.2921V9.3747C59.2921 8.17456 58.2472 7.59539 56.1932 7.59539H52.6346C51.8225 7.59539 51.3986 7.28491 51.3986 6.62812C51.3986 5.97132 51.8225 5.625 52.6346 5.625H56.1932C60.0265 5.625 61.9193 6.90277 61.9193 9.38068V14.2947C61.9193 16.6532 60.0981 17.8533 56.4261 17.8533H48.6102V17.8473ZM59.2861 14.2111V11.4645H48.7953C46.819 11.4645 45.8517 12.0079 45.8517 13.011V14.3245C45.8517 15.3694 46.819 15.871 48.7953 15.871H56.2649C58.283 15.871 59.2861 15.3336 59.2861 14.2111Z'
										fill='#DC4945'
									/>
									<path
										d='M73.0238 17.8437C68.6889 17.8437 66.5215 16.5301 66.5215 13.8551V9.59791C66.5215 6.92893 68.6889 5.60938 73.0238 5.60938H81.7293C82.5831 5.60938 83.0429 5.95568 83.0429 6.65428C83.0429 7.35287 82.5771 7.69918 81.7293 7.69918H72.9043C70.4264 7.69918 69.1905 8.32014 69.1905 9.59791V13.8969C69.1905 15.1329 70.4264 15.7897 72.9043 15.7897H81.7293C82.5831 15.7897 83.0429 16.1002 83.0429 16.7988C83.0429 17.4974 82.5771 17.8437 81.7293 17.8437H73.0238Z'
										fill='#DC4945'
									/>
									<path
										d='M89.55 12.5512V14.0977C89.55 15.2978 90.7083 15.877 93.031 15.877H96.7448C97.5569 15.877 97.9808 16.1874 97.9808 16.8442C97.9808 17.501 97.5569 17.8115 96.7448 17.8115H93.031C88.9648 17.8115 86.875 16.5756 86.875 14.0977V9.18363C86.875 6.82514 88.6961 5.625 92.3682 5.625H99.6467C103.205 5.625 104.985 6.7117 104.985 8.83733V11.6615C104.985 12.2825 104.597 12.5512 103.826 12.5512H89.55ZM89.55 10.8495H102.166C102.322 10.8495 102.357 10.7719 102.357 10.6584V9.34484C102.357 8.18649 101.39 7.60135 99.4556 7.60135H92.5294C90.5172 7.60135 89.55 8.18052 89.55 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M111.884 7.66063V16.9095C111.884 17.6081 111.46 17.9544 110.606 17.9544C109.681 17.9544 109.215 17.6081 109.215 16.9095V3.7915C109.215 1.27777 111.227 0 115.371 0H117.496C118.308 0 118.738 0.346325 118.738 0.967295C118.738 1.62409 118.314 1.9704 117.496 1.9704H115.371C113.048 1.9704 111.89 2.54958 111.89 3.74972V5.7201H117.502C118.314 5.7201 118.744 6.03058 118.744 6.68737C118.744 7.34417 118.32 7.65465 117.502 7.65465H111.884V7.66063Z'
										fill='#DC4945'
									/>
									<path
										d='M124.69 12.5512V14.0977C124.69 15.2978 125.848 15.877 128.171 15.877H131.885C132.697 15.877 133.121 16.1874 133.121 16.8442C133.121 17.501 132.697 17.8115 131.885 17.8115H128.207C124.146 17.8115 122.057 16.5756 122.057 14.0977V9.18363C122.057 6.82514 123.878 5.625 127.55 5.625H134.822C138.381 5.625 140.166 6.7117 140.166 8.83733V11.6615C140.166 12.2825 139.778 12.5512 139.002 12.5512H124.69ZM124.69 10.8495H137.306C137.461 10.8495 137.497 10.7719 137.497 10.6584V9.34484C137.497 8.18649 136.53 7.60135 134.595 7.60135H127.669C125.657 7.60135 124.69 8.18052 124.69 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M152.942 13.0361L146.249 17.6038C145.861 17.8725 145.551 17.9919 145.204 17.9501C144.35 17.9501 143.891 17.6038 143.891 16.947C143.891 16.6783 144.004 16.3679 144.512 16.0574L150.936 11.6449L144.858 7.4235C144.356 7.11302 144.237 6.72491 144.237 6.45622C144.237 5.75763 144.703 5.45312 145.592 5.45312C146.058 5.45312 146.327 5.56657 146.715 5.84123L153.139 10.2895L159.642 5.84123C160.03 5.60836 160.299 5.45312 160.687 5.45312C161.576 5.45312 162 5.79943 162 6.49803C161.964 6.73089 161.923 7.04137 161.379 7.38768L155.11 11.6807L161.337 15.9797C161.803 16.3261 161.958 16.6783 161.958 16.947C161.958 17.6456 161.493 17.9501 160.603 17.9501C160.215 17.9501 159.827 17.8725 159.481 17.562L152.942 13.0361Z'
										fill='#DC4945'
									/>
								</svg>
							</div>

							<div className={s.Description}>
								<span>The future of Space Finance</span>
							</div>

							<div className={s.FoundedDate}>
								<span>Founded in 2022</span>
							</div>

							<div className={s.FoundedOfCountry}>
								<span>USA & Canada</span>
							</div>

							<div className={s.Tags}>
								<div className={s.Tags_Item}>
									<span>Finance</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Information Technologies</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Science</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Finance</span>
								</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Desktop}`}
							/>
						</div>

						<div className={s.CompanyCard_Column}>
							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Market value</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Opened Investmet Opportunities</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Company Market Cap</span>
								</div>
								<div className={s.Parameter_Value}>$ 70,12B</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Investment Amounts</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Mobile}`}
							/>
						</div>
					</div>

					<div className={s.CompanyCard}>
						<div className={s.CompanyCard_Column}>
							<div className={s.Logo}>
								<svg
									width='162'
									height='23'
									viewBox='0 0 162 23'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16.7542 15.0291C16.7542 16.9278 14.8555 17.8533 11.0282 17.8533H1.23597C0.423931 17.8533 0 17.5428 0 16.886C0 16.2292 0.465727 15.9188 1.23597 15.9188H11.064C13.112 15.9188 14.1569 15.6083 14.1569 15.0649V13.6737C14.1569 13.0945 13.112 12.8259 11.064 12.8259H5.8395C2.00621 12.7841 0.113448 11.8586 0.113448 10.0375V8.83732C0.113448 6.70573 2.0898 5.625 6.03654 5.625H9.48172C10.2938 5.625 10.7595 5.97131 10.7595 6.6281C10.7595 7.28489 10.2938 7.59538 9.48172 7.59538H6.03654C3.83329 7.59538 2.74659 7.98349 2.74659 8.83135V9.95387C2.74659 10.6525 3.86912 10.9988 6.03654 10.9988H11.2192C14.9331 10.9988 16.7901 11.8526 16.7901 13.5543V15.0231H16.7542V15.0291Z'
										fill='#DC4945'
									/>
									<path
										d='M23.7991 17.8437V21.1694C23.7991 21.868 23.3333 22.2143 22.4855 22.2143C21.5958 22.2143 21.1719 21.868 21.1719 21.1694V9.5979C21.1719 6.92893 23.3393 5.60938 27.6741 5.60938H32.7434C37.0782 5.60938 39.2457 6.92296 39.2457 9.5979V13.8551C39.2457 16.4883 37.0782 17.8437 32.7434 17.8437H23.7991ZM23.7991 15.7897H32.7374C35.2153 15.7897 36.4513 15.1329 36.4513 13.891V9.5979C36.4513 8.32014 35.2153 7.69918 32.7374 7.69918H27.5129C25.035 7.69918 23.7991 8.32014 23.7991 9.5979V15.7897Z'
										fill='#DC4945'
									/>
									<path
										d='M48.6102 17.8473C45.0098 17.8473 43.2305 16.7248 43.2305 14.5216V13.0886C43.2305 10.8853 45.0098 9.76282 48.6102 9.76282H59.2921V9.3747C59.2921 8.17456 58.2472 7.59539 56.1932 7.59539H52.6346C51.8225 7.59539 51.3986 7.28491 51.3986 6.62812C51.3986 5.97132 51.8225 5.625 52.6346 5.625H56.1932C60.0265 5.625 61.9193 6.90277 61.9193 9.38068V14.2947C61.9193 16.6532 60.0981 17.8533 56.4261 17.8533H48.6102V17.8473ZM59.2861 14.2111V11.4645H48.7953C46.819 11.4645 45.8517 12.0079 45.8517 13.011V14.3245C45.8517 15.3694 46.819 15.871 48.7953 15.871H56.2649C58.283 15.871 59.2861 15.3336 59.2861 14.2111Z'
										fill='#DC4945'
									/>
									<path
										d='M73.0238 17.8437C68.6889 17.8437 66.5215 16.5301 66.5215 13.8551V9.59791C66.5215 6.92893 68.6889 5.60938 73.0238 5.60938H81.7293C82.5831 5.60938 83.0429 5.95568 83.0429 6.65428C83.0429 7.35287 82.5771 7.69918 81.7293 7.69918H72.9043C70.4264 7.69918 69.1905 8.32014 69.1905 9.59791V13.8969C69.1905 15.1329 70.4264 15.7897 72.9043 15.7897H81.7293C82.5831 15.7897 83.0429 16.1002 83.0429 16.7988C83.0429 17.4974 82.5771 17.8437 81.7293 17.8437H73.0238Z'
										fill='#DC4945'
									/>
									<path
										d='M89.55 12.5512V14.0977C89.55 15.2978 90.7083 15.877 93.031 15.877H96.7448C97.5569 15.877 97.9808 16.1874 97.9808 16.8442C97.9808 17.501 97.5569 17.8115 96.7448 17.8115H93.031C88.9648 17.8115 86.875 16.5756 86.875 14.0977V9.18363C86.875 6.82514 88.6961 5.625 92.3682 5.625H99.6467C103.205 5.625 104.985 6.7117 104.985 8.83733V11.6615C104.985 12.2825 104.597 12.5512 103.826 12.5512H89.55ZM89.55 10.8495H102.166C102.322 10.8495 102.357 10.7719 102.357 10.6584V9.34484C102.357 8.18649 101.39 7.60135 99.4556 7.60135H92.5294C90.5172 7.60135 89.55 8.18052 89.55 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M111.884 7.66063V16.9095C111.884 17.6081 111.46 17.9544 110.606 17.9544C109.681 17.9544 109.215 17.6081 109.215 16.9095V3.7915C109.215 1.27777 111.227 0 115.371 0H117.496C118.308 0 118.738 0.346325 118.738 0.967295C118.738 1.62409 118.314 1.9704 117.496 1.9704H115.371C113.048 1.9704 111.89 2.54958 111.89 3.74972V5.7201H117.502C118.314 5.7201 118.744 6.03058 118.744 6.68737C118.744 7.34417 118.32 7.65465 117.502 7.65465H111.884V7.66063Z'
										fill='#DC4945'
									/>
									<path
										d='M124.69 12.5512V14.0977C124.69 15.2978 125.848 15.877 128.171 15.877H131.885C132.697 15.877 133.121 16.1874 133.121 16.8442C133.121 17.501 132.697 17.8115 131.885 17.8115H128.207C124.146 17.8115 122.057 16.5756 122.057 14.0977V9.18363C122.057 6.82514 123.878 5.625 127.55 5.625H134.822C138.381 5.625 140.166 6.7117 140.166 8.83733V11.6615C140.166 12.2825 139.778 12.5512 139.002 12.5512H124.69ZM124.69 10.8495H137.306C137.461 10.8495 137.497 10.7719 137.497 10.6584V9.34484C137.497 8.18649 136.53 7.60135 134.595 7.60135H127.669C125.657 7.60135 124.69 8.18052 124.69 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M152.942 13.0361L146.249 17.6038C145.861 17.8725 145.551 17.9919 145.204 17.9501C144.35 17.9501 143.891 17.6038 143.891 16.947C143.891 16.6783 144.004 16.3679 144.512 16.0574L150.936 11.6449L144.858 7.4235C144.356 7.11302 144.237 6.72491 144.237 6.45622C144.237 5.75763 144.703 5.45312 145.592 5.45312C146.058 5.45312 146.327 5.56657 146.715 5.84123L153.139 10.2895L159.642 5.84123C160.03 5.60836 160.299 5.45312 160.687 5.45312C161.576 5.45312 162 5.79943 162 6.49803C161.964 6.73089 161.923 7.04137 161.379 7.38768L155.11 11.6807L161.337 15.9797C161.803 16.3261 161.958 16.6783 161.958 16.947C161.958 17.6456 161.493 17.9501 160.603 17.9501C160.215 17.9501 159.827 17.8725 159.481 17.562L152.942 13.0361Z'
										fill='#DC4945'
									/>
								</svg>
							</div>

							<div className={s.Description}>
								<span>The future of Space Finance</span>
							</div>

							<div className={s.FoundedDate}>
								<span>Founded in 2022</span>
							</div>

							<div className={s.FoundedOfCountry}>
								<span>USA & Canada</span>
							</div>

							<div className={s.Tags}>
								<div className={s.Tags_Item}>
									<span>Finance</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Information Technologies</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Science</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Finance</span>
								</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Desktop}`}
							/>
						</div>

						<div className={s.CompanyCard_Column}>
							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Market value</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Opened Investmet Opportunities</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Company Market Cap</span>
								</div>
								<div className={s.Parameter_Value}>$ 70,12B</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Investment Amounts</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Mobile}`}
							/>
						</div>
					</div>

					<div className={s.CompanyCard}>
						<div className={s.CompanyCard_Column}>
							<div className={s.Logo}>
								<svg
									width='162'
									height='23'
									viewBox='0 0 162 23'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16.7542 15.0291C16.7542 16.9278 14.8555 17.8533 11.0282 17.8533H1.23597C0.423931 17.8533 0 17.5428 0 16.886C0 16.2292 0.465727 15.9188 1.23597 15.9188H11.064C13.112 15.9188 14.1569 15.6083 14.1569 15.0649V13.6737C14.1569 13.0945 13.112 12.8259 11.064 12.8259H5.8395C2.00621 12.7841 0.113448 11.8586 0.113448 10.0375V8.83732C0.113448 6.70573 2.0898 5.625 6.03654 5.625H9.48172C10.2938 5.625 10.7595 5.97131 10.7595 6.6281C10.7595 7.28489 10.2938 7.59538 9.48172 7.59538H6.03654C3.83329 7.59538 2.74659 7.98349 2.74659 8.83135V9.95387C2.74659 10.6525 3.86912 10.9988 6.03654 10.9988H11.2192C14.9331 10.9988 16.7901 11.8526 16.7901 13.5543V15.0231H16.7542V15.0291Z'
										fill='#DC4945'
									/>
									<path
										d='M23.7991 17.8437V21.1694C23.7991 21.868 23.3333 22.2143 22.4855 22.2143C21.5958 22.2143 21.1719 21.868 21.1719 21.1694V9.5979C21.1719 6.92893 23.3393 5.60938 27.6741 5.60938H32.7434C37.0782 5.60938 39.2457 6.92296 39.2457 9.5979V13.8551C39.2457 16.4883 37.0782 17.8437 32.7434 17.8437H23.7991ZM23.7991 15.7897H32.7374C35.2153 15.7897 36.4513 15.1329 36.4513 13.891V9.5979C36.4513 8.32014 35.2153 7.69918 32.7374 7.69918H27.5129C25.035 7.69918 23.7991 8.32014 23.7991 9.5979V15.7897Z'
										fill='#DC4945'
									/>
									<path
										d='M48.6102 17.8473C45.0098 17.8473 43.2305 16.7248 43.2305 14.5216V13.0886C43.2305 10.8853 45.0098 9.76282 48.6102 9.76282H59.2921V9.3747C59.2921 8.17456 58.2472 7.59539 56.1932 7.59539H52.6346C51.8225 7.59539 51.3986 7.28491 51.3986 6.62812C51.3986 5.97132 51.8225 5.625 52.6346 5.625H56.1932C60.0265 5.625 61.9193 6.90277 61.9193 9.38068V14.2947C61.9193 16.6532 60.0981 17.8533 56.4261 17.8533H48.6102V17.8473ZM59.2861 14.2111V11.4645H48.7953C46.819 11.4645 45.8517 12.0079 45.8517 13.011V14.3245C45.8517 15.3694 46.819 15.871 48.7953 15.871H56.2649C58.283 15.871 59.2861 15.3336 59.2861 14.2111Z'
										fill='#DC4945'
									/>
									<path
										d='M73.0238 17.8437C68.6889 17.8437 66.5215 16.5301 66.5215 13.8551V9.59791C66.5215 6.92893 68.6889 5.60938 73.0238 5.60938H81.7293C82.5831 5.60938 83.0429 5.95568 83.0429 6.65428C83.0429 7.35287 82.5771 7.69918 81.7293 7.69918H72.9043C70.4264 7.69918 69.1905 8.32014 69.1905 9.59791V13.8969C69.1905 15.1329 70.4264 15.7897 72.9043 15.7897H81.7293C82.5831 15.7897 83.0429 16.1002 83.0429 16.7988C83.0429 17.4974 82.5771 17.8437 81.7293 17.8437H73.0238Z'
										fill='#DC4945'
									/>
									<path
										d='M89.55 12.5512V14.0977C89.55 15.2978 90.7083 15.877 93.031 15.877H96.7448C97.5569 15.877 97.9808 16.1874 97.9808 16.8442C97.9808 17.501 97.5569 17.8115 96.7448 17.8115H93.031C88.9648 17.8115 86.875 16.5756 86.875 14.0977V9.18363C86.875 6.82514 88.6961 5.625 92.3682 5.625H99.6467C103.205 5.625 104.985 6.7117 104.985 8.83733V11.6615C104.985 12.2825 104.597 12.5512 103.826 12.5512H89.55ZM89.55 10.8495H102.166C102.322 10.8495 102.357 10.7719 102.357 10.6584V9.34484C102.357 8.18649 101.39 7.60135 99.4556 7.60135H92.5294C90.5172 7.60135 89.55 8.18052 89.55 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M111.884 7.66063V16.9095C111.884 17.6081 111.46 17.9544 110.606 17.9544C109.681 17.9544 109.215 17.6081 109.215 16.9095V3.7915C109.215 1.27777 111.227 0 115.371 0H117.496C118.308 0 118.738 0.346325 118.738 0.967295C118.738 1.62409 118.314 1.9704 117.496 1.9704H115.371C113.048 1.9704 111.89 2.54958 111.89 3.74972V5.7201H117.502C118.314 5.7201 118.744 6.03058 118.744 6.68737C118.744 7.34417 118.32 7.65465 117.502 7.65465H111.884V7.66063Z'
										fill='#DC4945'
									/>
									<path
										d='M124.69 12.5512V14.0977C124.69 15.2978 125.848 15.877 128.171 15.877H131.885C132.697 15.877 133.121 16.1874 133.121 16.8442C133.121 17.501 132.697 17.8115 131.885 17.8115H128.207C124.146 17.8115 122.057 16.5756 122.057 14.0977V9.18363C122.057 6.82514 123.878 5.625 127.55 5.625H134.822C138.381 5.625 140.166 6.7117 140.166 8.83733V11.6615C140.166 12.2825 139.778 12.5512 139.002 12.5512H124.69ZM124.69 10.8495H137.306C137.461 10.8495 137.497 10.7719 137.497 10.6584V9.34484C137.497 8.18649 136.53 7.60135 134.595 7.60135H127.669C125.657 7.60135 124.69 8.18052 124.69 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M152.942 13.0361L146.249 17.6038C145.861 17.8725 145.551 17.9919 145.204 17.9501C144.35 17.9501 143.891 17.6038 143.891 16.947C143.891 16.6783 144.004 16.3679 144.512 16.0574L150.936 11.6449L144.858 7.4235C144.356 7.11302 144.237 6.72491 144.237 6.45622C144.237 5.75763 144.703 5.45312 145.592 5.45312C146.058 5.45312 146.327 5.56657 146.715 5.84123L153.139 10.2895L159.642 5.84123C160.03 5.60836 160.299 5.45312 160.687 5.45312C161.576 5.45312 162 5.79943 162 6.49803C161.964 6.73089 161.923 7.04137 161.379 7.38768L155.11 11.6807L161.337 15.9797C161.803 16.3261 161.958 16.6783 161.958 16.947C161.958 17.6456 161.493 17.9501 160.603 17.9501C160.215 17.9501 159.827 17.8725 159.481 17.562L152.942 13.0361Z'
										fill='#DC4945'
									/>
								</svg>
							</div>

							<div className={s.Description}>
								<span>The future of Space Finance</span>
							</div>

							<div className={s.FoundedDate}>
								<span>Founded in 2022</span>
							</div>

							<div className={s.FoundedOfCountry}>
								<span>USA & Canada</span>
							</div>

							<div className={s.Tags}>
								<div className={s.Tags_Item}>
									<span>Finance</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Information Technologies</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Science</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Finance</span>
								</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Desktop}`}
							/>
						</div>

						<div className={s.CompanyCard_Column}>
							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Market value</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Opened Investmet Opportunities</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Company Market Cap</span>
								</div>
								<div className={s.Parameter_Value}>$ 70,12B</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Investment Amounts</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Mobile}`}
							/>
						</div>
					</div>

					<div className={s.CompanyCard}>
						<div className={s.CompanyCard_Column}>
							<div className={s.Logo}>
								<svg
									width='162'
									height='23'
									viewBox='0 0 162 23'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16.7542 15.0291C16.7542 16.9278 14.8555 17.8533 11.0282 17.8533H1.23597C0.423931 17.8533 0 17.5428 0 16.886C0 16.2292 0.465727 15.9188 1.23597 15.9188H11.064C13.112 15.9188 14.1569 15.6083 14.1569 15.0649V13.6737C14.1569 13.0945 13.112 12.8259 11.064 12.8259H5.8395C2.00621 12.7841 0.113448 11.8586 0.113448 10.0375V8.83732C0.113448 6.70573 2.0898 5.625 6.03654 5.625H9.48172C10.2938 5.625 10.7595 5.97131 10.7595 6.6281C10.7595 7.28489 10.2938 7.59538 9.48172 7.59538H6.03654C3.83329 7.59538 2.74659 7.98349 2.74659 8.83135V9.95387C2.74659 10.6525 3.86912 10.9988 6.03654 10.9988H11.2192C14.9331 10.9988 16.7901 11.8526 16.7901 13.5543V15.0231H16.7542V15.0291Z'
										fill='#DC4945'
									/>
									<path
										d='M23.7991 17.8437V21.1694C23.7991 21.868 23.3333 22.2143 22.4855 22.2143C21.5958 22.2143 21.1719 21.868 21.1719 21.1694V9.5979C21.1719 6.92893 23.3393 5.60938 27.6741 5.60938H32.7434C37.0782 5.60938 39.2457 6.92296 39.2457 9.5979V13.8551C39.2457 16.4883 37.0782 17.8437 32.7434 17.8437H23.7991ZM23.7991 15.7897H32.7374C35.2153 15.7897 36.4513 15.1329 36.4513 13.891V9.5979C36.4513 8.32014 35.2153 7.69918 32.7374 7.69918H27.5129C25.035 7.69918 23.7991 8.32014 23.7991 9.5979V15.7897Z'
										fill='#DC4945'
									/>
									<path
										d='M48.6102 17.8473C45.0098 17.8473 43.2305 16.7248 43.2305 14.5216V13.0886C43.2305 10.8853 45.0098 9.76282 48.6102 9.76282H59.2921V9.3747C59.2921 8.17456 58.2472 7.59539 56.1932 7.59539H52.6346C51.8225 7.59539 51.3986 7.28491 51.3986 6.62812C51.3986 5.97132 51.8225 5.625 52.6346 5.625H56.1932C60.0265 5.625 61.9193 6.90277 61.9193 9.38068V14.2947C61.9193 16.6532 60.0981 17.8533 56.4261 17.8533H48.6102V17.8473ZM59.2861 14.2111V11.4645H48.7953C46.819 11.4645 45.8517 12.0079 45.8517 13.011V14.3245C45.8517 15.3694 46.819 15.871 48.7953 15.871H56.2649C58.283 15.871 59.2861 15.3336 59.2861 14.2111Z'
										fill='#DC4945'
									/>
									<path
										d='M73.0238 17.8437C68.6889 17.8437 66.5215 16.5301 66.5215 13.8551V9.59791C66.5215 6.92893 68.6889 5.60938 73.0238 5.60938H81.7293C82.5831 5.60938 83.0429 5.95568 83.0429 6.65428C83.0429 7.35287 82.5771 7.69918 81.7293 7.69918H72.9043C70.4264 7.69918 69.1905 8.32014 69.1905 9.59791V13.8969C69.1905 15.1329 70.4264 15.7897 72.9043 15.7897H81.7293C82.5831 15.7897 83.0429 16.1002 83.0429 16.7988C83.0429 17.4974 82.5771 17.8437 81.7293 17.8437H73.0238Z'
										fill='#DC4945'
									/>
									<path
										d='M89.55 12.5512V14.0977C89.55 15.2978 90.7083 15.877 93.031 15.877H96.7448C97.5569 15.877 97.9808 16.1874 97.9808 16.8442C97.9808 17.501 97.5569 17.8115 96.7448 17.8115H93.031C88.9648 17.8115 86.875 16.5756 86.875 14.0977V9.18363C86.875 6.82514 88.6961 5.625 92.3682 5.625H99.6467C103.205 5.625 104.985 6.7117 104.985 8.83733V11.6615C104.985 12.2825 104.597 12.5512 103.826 12.5512H89.55ZM89.55 10.8495H102.166C102.322 10.8495 102.357 10.7719 102.357 10.6584V9.34484C102.357 8.18649 101.39 7.60135 99.4556 7.60135H92.5294C90.5172 7.60135 89.55 8.18052 89.55 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M111.884 7.66063V16.9095C111.884 17.6081 111.46 17.9544 110.606 17.9544C109.681 17.9544 109.215 17.6081 109.215 16.9095V3.7915C109.215 1.27777 111.227 0 115.371 0H117.496C118.308 0 118.738 0.346325 118.738 0.967295C118.738 1.62409 118.314 1.9704 117.496 1.9704H115.371C113.048 1.9704 111.89 2.54958 111.89 3.74972V5.7201H117.502C118.314 5.7201 118.744 6.03058 118.744 6.68737C118.744 7.34417 118.32 7.65465 117.502 7.65465H111.884V7.66063Z'
										fill='#DC4945'
									/>
									<path
										d='M124.69 12.5512V14.0977C124.69 15.2978 125.848 15.877 128.171 15.877H131.885C132.697 15.877 133.121 16.1874 133.121 16.8442C133.121 17.501 132.697 17.8115 131.885 17.8115H128.207C124.146 17.8115 122.057 16.5756 122.057 14.0977V9.18363C122.057 6.82514 123.878 5.625 127.55 5.625H134.822C138.381 5.625 140.166 6.7117 140.166 8.83733V11.6615C140.166 12.2825 139.778 12.5512 139.002 12.5512H124.69ZM124.69 10.8495H137.306C137.461 10.8495 137.497 10.7719 137.497 10.6584V9.34484C137.497 8.18649 136.53 7.60135 134.595 7.60135H127.669C125.657 7.60135 124.69 8.18052 124.69 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M152.942 13.0361L146.249 17.6038C145.861 17.8725 145.551 17.9919 145.204 17.9501C144.35 17.9501 143.891 17.6038 143.891 16.947C143.891 16.6783 144.004 16.3679 144.512 16.0574L150.936 11.6449L144.858 7.4235C144.356 7.11302 144.237 6.72491 144.237 6.45622C144.237 5.75763 144.703 5.45312 145.592 5.45312C146.058 5.45312 146.327 5.56657 146.715 5.84123L153.139 10.2895L159.642 5.84123C160.03 5.60836 160.299 5.45312 160.687 5.45312C161.576 5.45312 162 5.79943 162 6.49803C161.964 6.73089 161.923 7.04137 161.379 7.38768L155.11 11.6807L161.337 15.9797C161.803 16.3261 161.958 16.6783 161.958 16.947C161.958 17.6456 161.493 17.9501 160.603 17.9501C160.215 17.9501 159.827 17.8725 159.481 17.562L152.942 13.0361Z'
										fill='#DC4945'
									/>
								</svg>
							</div>

							<div className={s.Description}>
								<span>The future of Space Finance</span>
							</div>

							<div className={s.FoundedDate}>
								<span>Founded in 2022</span>
							</div>

							<div className={s.FoundedOfCountry}>
								<span>USA & Canada</span>
							</div>

							<div className={s.Tags}>
								<div className={s.Tags_Item}>
									<span>Finance</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Information Technologies</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Science</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Finance</span>
								</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Desktop}`}
							/>
						</div>

						<div className={s.CompanyCard_Column}>
							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Market value</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Opened Investmet Opportunities</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Company Market Cap</span>
								</div>
								<div className={s.Parameter_Value}>$ 70,12B</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Investment Amounts</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Mobile}`}
							/>
						</div>
					</div>
					<div className={s.CompanyCard}>
						<div className={s.CompanyCard_Column}>
							<div className={s.Logo}>
								<svg
									width='162'
									height='23'
									viewBox='0 0 162 23'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M16.7542 15.0291C16.7542 16.9278 14.8555 17.8533 11.0282 17.8533H1.23597C0.423931 17.8533 0 17.5428 0 16.886C0 16.2292 0.465727 15.9188 1.23597 15.9188H11.064C13.112 15.9188 14.1569 15.6083 14.1569 15.0649V13.6737C14.1569 13.0945 13.112 12.8259 11.064 12.8259H5.8395C2.00621 12.7841 0.113448 11.8586 0.113448 10.0375V8.83732C0.113448 6.70573 2.0898 5.625 6.03654 5.625H9.48172C10.2938 5.625 10.7595 5.97131 10.7595 6.6281C10.7595 7.28489 10.2938 7.59538 9.48172 7.59538H6.03654C3.83329 7.59538 2.74659 7.98349 2.74659 8.83135V9.95387C2.74659 10.6525 3.86912 10.9988 6.03654 10.9988H11.2192C14.9331 10.9988 16.7901 11.8526 16.7901 13.5543V15.0231H16.7542V15.0291Z'
										fill='#DC4945'
									/>
									<path
										d='M23.7991 17.8437V21.1694C23.7991 21.868 23.3333 22.2143 22.4855 22.2143C21.5958 22.2143 21.1719 21.868 21.1719 21.1694V9.5979C21.1719 6.92893 23.3393 5.60938 27.6741 5.60938H32.7434C37.0782 5.60938 39.2457 6.92296 39.2457 9.5979V13.8551C39.2457 16.4883 37.0782 17.8437 32.7434 17.8437H23.7991ZM23.7991 15.7897H32.7374C35.2153 15.7897 36.4513 15.1329 36.4513 13.891V9.5979C36.4513 8.32014 35.2153 7.69918 32.7374 7.69918H27.5129C25.035 7.69918 23.7991 8.32014 23.7991 9.5979V15.7897Z'
										fill='#DC4945'
									/>
									<path
										d='M48.6102 17.8473C45.0098 17.8473 43.2305 16.7248 43.2305 14.5216V13.0886C43.2305 10.8853 45.0098 9.76282 48.6102 9.76282H59.2921V9.3747C59.2921 8.17456 58.2472 7.59539 56.1932 7.59539H52.6346C51.8225 7.59539 51.3986 7.28491 51.3986 6.62812C51.3986 5.97132 51.8225 5.625 52.6346 5.625H56.1932C60.0265 5.625 61.9193 6.90277 61.9193 9.38068V14.2947C61.9193 16.6532 60.0981 17.8533 56.4261 17.8533H48.6102V17.8473ZM59.2861 14.2111V11.4645H48.7953C46.819 11.4645 45.8517 12.0079 45.8517 13.011V14.3245C45.8517 15.3694 46.819 15.871 48.7953 15.871H56.2649C58.283 15.871 59.2861 15.3336 59.2861 14.2111Z'
										fill='#DC4945'
									/>
									<path
										d='M73.0238 17.8437C68.6889 17.8437 66.5215 16.5301 66.5215 13.8551V9.59791C66.5215 6.92893 68.6889 5.60938 73.0238 5.60938H81.7293C82.5831 5.60938 83.0429 5.95568 83.0429 6.65428C83.0429 7.35287 82.5771 7.69918 81.7293 7.69918H72.9043C70.4264 7.69918 69.1905 8.32014 69.1905 9.59791V13.8969C69.1905 15.1329 70.4264 15.7897 72.9043 15.7897H81.7293C82.5831 15.7897 83.0429 16.1002 83.0429 16.7988C83.0429 17.4974 82.5771 17.8437 81.7293 17.8437H73.0238Z'
										fill='#DC4945'
									/>
									<path
										d='M89.55 12.5512V14.0977C89.55 15.2978 90.7083 15.877 93.031 15.877H96.7448C97.5569 15.877 97.9808 16.1874 97.9808 16.8442C97.9808 17.501 97.5569 17.8115 96.7448 17.8115H93.031C88.9648 17.8115 86.875 16.5756 86.875 14.0977V9.18363C86.875 6.82514 88.6961 5.625 92.3682 5.625H99.6467C103.205 5.625 104.985 6.7117 104.985 8.83733V11.6615C104.985 12.2825 104.597 12.5512 103.826 12.5512H89.55ZM89.55 10.8495H102.166C102.322 10.8495 102.357 10.7719 102.357 10.6584V9.34484C102.357 8.18649 101.39 7.60135 99.4556 7.60135H92.5294C90.5172 7.60135 89.55 8.18052 89.55 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M111.884 7.66063V16.9095C111.884 17.6081 111.46 17.9544 110.606 17.9544C109.681 17.9544 109.215 17.6081 109.215 16.9095V3.7915C109.215 1.27777 111.227 0 115.371 0H117.496C118.308 0 118.738 0.346325 118.738 0.967295C118.738 1.62409 118.314 1.9704 117.496 1.9704H115.371C113.048 1.9704 111.89 2.54958 111.89 3.74972V5.7201H117.502C118.314 5.7201 118.744 6.03058 118.744 6.68737C118.744 7.34417 118.32 7.65465 117.502 7.65465H111.884V7.66063Z'
										fill='#DC4945'
									/>
									<path
										d='M124.69 12.5512V14.0977C124.69 15.2978 125.848 15.877 128.171 15.877H131.885C132.697 15.877 133.121 16.1874 133.121 16.8442C133.121 17.501 132.697 17.8115 131.885 17.8115H128.207C124.146 17.8115 122.057 16.5756 122.057 14.0977V9.18363C122.057 6.82514 123.878 5.625 127.55 5.625H134.822C138.381 5.625 140.166 6.7117 140.166 8.83733V11.6615C140.166 12.2825 139.778 12.5512 139.002 12.5512H124.69ZM124.69 10.8495H137.306C137.461 10.8495 137.497 10.7719 137.497 10.6584V9.34484C137.497 8.18649 136.53 7.60135 134.595 7.60135H127.669C125.657 7.60135 124.69 8.18052 124.69 9.34484V10.8495Z'
										fill='#DC4945'
									/>
									<path
										d='M152.942 13.0361L146.249 17.6038C145.861 17.8725 145.551 17.9919 145.204 17.9501C144.35 17.9501 143.891 17.6038 143.891 16.947C143.891 16.6783 144.004 16.3679 144.512 16.0574L150.936 11.6449L144.858 7.4235C144.356 7.11302 144.237 6.72491 144.237 6.45622C144.237 5.75763 144.703 5.45312 145.592 5.45312C146.058 5.45312 146.327 5.56657 146.715 5.84123L153.139 10.2895L159.642 5.84123C160.03 5.60836 160.299 5.45312 160.687 5.45312C161.576 5.45312 162 5.79943 162 6.49803C161.964 6.73089 161.923 7.04137 161.379 7.38768L155.11 11.6807L161.337 15.9797C161.803 16.3261 161.958 16.6783 161.958 16.947C161.958 17.6456 161.493 17.9501 160.603 17.9501C160.215 17.9501 159.827 17.8725 159.481 17.562L152.942 13.0361Z'
										fill='#DC4945'
									/>
								</svg>
							</div>

							<div className={s.Description}>
								<span>The future of Space Finance</span>
							</div>

							<div className={s.FoundedDate}>
								<span>Founded in 2022</span>
							</div>

							<div className={s.FoundedOfCountry}>
								<span>USA & Canada</span>
							</div>

							<div className={s.Tags}>
								<div className={s.Tags_Item}>
									<span>Finance</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Information Technologies</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Science</span>
								</div>

								<div className={s.Tags_Item}>
									<span>Space Finance</span>
								</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Desktop}`}
							/>
						</div>

						<div className={s.CompanyCard_Column}>
							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Market value</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Opened Investmet Opportunities</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Company Market Cap</span>
								</div>
								<div className={s.Parameter_Value}>$ 70,12B</div>
							</div>

							<div className={s.Parameter}>
								<div className={s.Parameter_Label}>
									<span>Investment Amounts</span>
								</div>
								<div className={s.Parameter_Value}>$ 50,000,000.00</div>
							</div>

							<BaseButton
								title='View details'
								type='submit'
								className={`${s.ViewDetails} ${s.ViewDetails_Mobile}`}
							/>
						</div>
					</div>
				</div>
			</BaseContainer>
		</>
	);
};

export default CompanyCards;
