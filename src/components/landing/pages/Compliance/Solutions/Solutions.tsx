import { BaseButton, BaseContainer } from '@base/index';
import s from './Solutions.module.scss';

const Solutions: React.FC = () => {
	return (
		<>
			<div className='Wrapper'>
				<BaseContainer className={s.BaseContainer}>
					<div className={s.Solutions}>
						<div className={s.Solutions_Platform}>
							<div className={s.Solutions_Platform_Title}>
								<h2>
									KYC/KYB Platform <br /> for Onboarding and Monitoring
								</h2>
							</div>

							<div className={s.Solutions_Platform_Subtitle}>
								<p>Improving the Process of Onboarding</p>
							</div>

							<ul className={s.Solutions_Platform_Content}>
								<li className={s.Triangle}></li>

								<li className={s.ProcessStep}>
									<div className={s.ProcessStep_Number}>
										<span>1</span>
									</div>

									<div className={s.ProcessStep_Label}>
										<span>Verify</span>
									</div>

									<div className={s.ProcessStep_Description}>
										<p>
											that the company exists and is active, Live Personal
											Identity
										</p>
									</div>

									<div className={s.ProcessStep_Line}></div>

									<div className={s.ProcessStep_Dot}></div>
								</li>

								<li className={s.ProcessStep}>
									<div className={s.ProcessStep_Number}>
										<span>2</span>
									</div>

									<div className={s.ProcessStep_Label}>
										<span>Identify</span>
									</div>

									<div className={s.ProcessStep_Description}>
										<p>
											all the key individuals, discover corporate structure and
											management
										</p>
									</div>

									<div className={s.ProcessStep_Line}></div>

									<div className={s.ProcessStep_Dot}></div>
								</li>

								<li className={s.ProcessStep}>
									<div className={s.ProcessStep_Number}>
										<span>3</span>
									</div>

									<div className={s.ProcessStep_Label}>
										<span>Overview</span>
									</div>

									<div className={s.ProcessStep_Description}>
										<p>
											See the ownership structure up to the very last person –
											the ultimate beneficial owner
										</p>
									</div>

									<div className={s.ProcessStep_Line}></div>

									<div className={s.ProcessStep_Dot}></div>
								</li>

								<li className={s.ProcessStep}>
									<div className={s.ProcessStep_Number}>
										<span>4</span>
									</div>

									<div className={s.ProcessStep_Label}>
										<span>Compare</span>
									</div>

									<div className={s.ProcessStep_Description}>
										<p>
											Data from Government records with corporate documents and
											clear with AML databases
										</p>
									</div>

									<div className={s.ProcessStep_Line}></div>

									<div className={s.ProcessStep_Dot}></div>
								</li>

								<li className={s.ProcessStep}>
									<div className={s.ProcessStep_Number}>
										<span>5</span>
									</div>

									<div className={s.ProcessStep_Label}>
										<span>Verification</span>
									</div>

									<div className={s.ProcessStep_Description}>
										<p>
											Request Government verification Certificates of Incumbency
											and Good Standing certified by apostille or consulate
										</p>
									</div>

									<div className={s.ProcessStep_Line}></div>

									<div className={s.ProcessStep_Dot}></div>
								</li>
							</ul>
						</div>

						<div className={s.Solutions_CustomerGroups}>
							<div className={s.Solutions_CustomerGroups_Title}>
								<h2>Here are our main customer groups</h2>
							</div>

							<div className={s.Solutions_CustomerGroups_Content}>
								<div className={s.Group}>
									<svg
										width='100'
										height='79'
										viewBox='0 0 100 79'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Group_Icon}
									>
										<mask id='path-1-inside-1_8408_163622' fill='white'>
											<path d='M0.59 44.0161C0.99646 47.1247 2.51982 49.9792 4.87593 52.0473C7.23204 54.1154 10.26 55.2558 13.395 55.2558C16.53 55.2558 19.558 54.1154 21.9141 52.0473C24.2702 49.9792 25.7935 47.1247 26.2 44.0161H0.59ZM70.364 70.0141C70.3648 70.2769 70.3138 70.5373 70.2139 70.7804C70.114 71.0235 69.9671 71.2445 69.7818 71.4308C69.5964 71.6171 69.3761 71.7651 69.1335 71.8662C68.8909 71.9673 68.6308 72.0196 68.368 72.0201H31.056C29.96 72.0201 29.056 71.1201 29.056 70.0141C29.0586 69.4858 29.2707 68.9801 29.6456 68.6078C30.0205 68.2355 30.5277 68.0271 31.056 68.0281H68.366C69.47 68.0281 70.364 68.9161 70.364 70.0141ZM29.274 73.0421H70.148V78.8161H29.274V73.0421ZM73.8 44.0161C74.2037 47.1267 75.7257 49.9841 78.0819 52.0547C80.4381 54.1253 83.4673 55.2675 86.604 55.2681C89.7403 55.2682 92.7692 54.126 95.1246 52.0552C97.4799 49.9843 99.0005 47.1266 99.402 44.0161H73.8ZM98.698 39.9981L88.212 25.5541H93.818C95.182 25.5541 96.28 24.4361 96.28 23.0541C96.28 21.6841 95.18 20.5781 93.818 20.5781H64.122C63.2405 18.15 61.7349 15.9968 59.7568 14.3354C57.7788 12.674 55.3979 11.563 52.854 11.1141V3.32013C52.854 1.93413 51.742 0.828132 50.364 0.828132L50.132 0.854132L49.9 0.828132C49.5728 0.827337 49.2487 0.891296 48.9463 1.01632C48.644 1.14135 48.3693 1.32497 48.1382 1.55662C47.9071 1.78826 47.7242 2.06333 47.5999 2.366C47.4756 2.66867 47.4124 2.99294 47.414 3.32013V11.1101C44.8704 11.5587 42.49 12.6696 40.5125 14.3311C38.535 15.9926 37.0303 18.1459 36.15 20.5741H6.448C5.094 20.5741 3.99 21.6801 3.99 23.0501C3.99 24.4341 5.094 25.5501 6.448 25.5501H11.798L1.31 39.9941H0V42.6621H26.796V39.9941H25.48L14.996 25.5541H39.334C39.334 24.9901 39.396 24.4361 39.48 23.9061C39.566 23.6561 39.624 23.4021 39.624 23.1401C40.0748 21.24 41.0403 19.5008 42.4144 18.1132C43.7886 16.7257 45.5184 15.7434 47.414 15.2741V42.6681H47.31C47.096 52.9721 42.194 61.9581 34.922 67.0081H65.35C58.076 61.9581 53.178 52.9721 52.952 42.6681H52.856V15.2741C54.7514 15.7435 56.4808 16.7259 57.8546 18.1134C59.2285 19.501 60.1935 21.2402 60.644 23.1401C60.652 23.4021 60.706 23.6561 60.794 23.9061C60.874 24.4381 60.924 24.9901 60.924 25.5541H85.008L74.52 39.9981H73.212V42.6661H100V39.9981H98.698ZM12.33 39.9981H3.96L12.33 28.4681V39.9981ZM14.472 39.9981V28.4681L22.842 39.9981H14.472ZM85.536 39.9981H77.162L85.536 28.4681V39.9981ZM87.668 39.9981V28.4681L96.048 39.9981H87.668ZM15.882 17.1021C15.8636 17.749 15.5938 18.3632 15.1298 18.8142C14.6657 19.2653 14.0441 19.5176 13.397 19.5176C12.7499 19.5176 12.1283 19.2653 11.6642 18.8142C11.2002 18.3632 10.9304 17.749 10.912 17.1021C10.912 15.7301 12.028 14.6101 13.402 14.6101C14.77 14.6081 15.882 15.7301 15.882 17.1021ZM89.09 16.9701C89.09 18.3521 87.978 19.4481 86.606 19.4481C86.2797 19.4502 85.9562 19.3876 85.6543 19.2639C85.3524 19.1402 85.078 18.9579 84.847 18.7274C84.6159 18.497 84.4329 18.223 84.3085 17.9214C84.1841 17.6197 84.1207 17.2964 84.122 16.9701C84.1086 16.6355 84.1629 16.3017 84.2817 15.9886C84.4004 15.6755 84.5812 15.3897 84.8132 15.1482C85.0452 14.9067 85.3236 14.7146 85.6317 14.5833C85.9397 14.4521 86.2711 14.3844 86.606 14.3844C86.9409 14.3844 87.2723 14.4521 87.5803 14.5833C87.8884 14.7146 88.1668 14.9067 88.3988 15.1482C88.6308 15.3897 88.8116 15.6755 88.9303 15.9886C89.0491 16.3017 89.1034 16.6355 89.09 16.9701Z' />
										</mask>
										<path
											d='M0.59 44.0161C0.99646 47.1247 2.51982 49.9792 4.87593 52.0473C7.23204 54.1154 10.26 55.2558 13.395 55.2558C16.53 55.2558 19.558 54.1154 21.9141 52.0473C24.2702 49.9792 25.7935 47.1247 26.2 44.0161H0.59ZM70.364 70.0141C70.3648 70.2769 70.3138 70.5373 70.2139 70.7804C70.114 71.0235 69.9671 71.2445 69.7818 71.4308C69.5964 71.6171 69.3761 71.7651 69.1335 71.8662C68.8909 71.9673 68.6308 72.0196 68.368 72.0201H31.056C29.96 72.0201 29.056 71.1201 29.056 70.0141C29.0586 69.4858 29.2707 68.9801 29.6456 68.6078C30.0205 68.2355 30.5277 68.0271 31.056 68.0281H68.366C69.47 68.0281 70.364 68.9161 70.364 70.0141ZM29.274 73.0421H70.148V78.8161H29.274V73.0421ZM73.8 44.0161C74.2037 47.1267 75.7257 49.9841 78.0819 52.0547C80.4381 54.1253 83.4673 55.2675 86.604 55.2681C89.7403 55.2682 92.7692 54.126 95.1246 52.0552C97.4799 49.9843 99.0005 47.1266 99.402 44.0161H73.8ZM98.698 39.9981L88.212 25.5541H93.818C95.182 25.5541 96.28 24.4361 96.28 23.0541C96.28 21.6841 95.18 20.5781 93.818 20.5781H64.122C63.2405 18.15 61.7349 15.9968 59.7568 14.3354C57.7788 12.674 55.3979 11.563 52.854 11.1141V3.32013C52.854 1.93413 51.742 0.828132 50.364 0.828132L50.132 0.854132L49.9 0.828132C49.5728 0.827337 49.2487 0.891296 48.9463 1.01632C48.644 1.14135 48.3693 1.32497 48.1382 1.55662C47.9071 1.78826 47.7242 2.06333 47.5999 2.366C47.4756 2.66867 47.4124 2.99294 47.414 3.32013V11.1101C44.8704 11.5587 42.49 12.6696 40.5125 14.3311C38.535 15.9926 37.0303 18.1459 36.15 20.5741H6.448C5.094 20.5741 3.99 21.6801 3.99 23.0501C3.99 24.4341 5.094 25.5501 6.448 25.5501H11.798L1.31 39.9941H0V42.6621H26.796V39.9941H25.48L14.996 25.5541H39.334C39.334 24.9901 39.396 24.4361 39.48 23.9061C39.566 23.6561 39.624 23.4021 39.624 23.1401C40.0748 21.24 41.0403 19.5008 42.4144 18.1132C43.7886 16.7257 45.5184 15.7434 47.414 15.2741V42.6681H47.31C47.096 52.9721 42.194 61.9581 34.922 67.0081H65.35C58.076 61.9581 53.178 52.9721 52.952 42.6681H52.856V15.2741C54.7514 15.7435 56.4808 16.7259 57.8546 18.1134C59.2285 19.501 60.1935 21.2402 60.644 23.1401C60.652 23.4021 60.706 23.6561 60.794 23.9061C60.874 24.4381 60.924 24.9901 60.924 25.5541H85.008L74.52 39.9981H73.212V42.6661H100V39.9981H98.698ZM12.33 39.9981H3.96L12.33 28.4681V39.9981ZM14.472 39.9981V28.4681L22.842 39.9981H14.472ZM85.536 39.9981H77.162L85.536 28.4681V39.9981ZM87.668 39.9981V28.4681L96.048 39.9981H87.668ZM15.882 17.1021C15.8636 17.749 15.5938 18.3632 15.1298 18.8142C14.6657 19.2653 14.0441 19.5176 13.397 19.5176C12.7499 19.5176 12.1283 19.2653 11.6642 18.8142C11.2002 18.3632 10.9304 17.749 10.912 17.1021C10.912 15.7301 12.028 14.6101 13.402 14.6101C14.77 14.6081 15.882 15.7301 15.882 17.1021ZM89.09 16.9701C89.09 18.3521 87.978 19.4481 86.606 19.4481C86.2797 19.4502 85.9562 19.3876 85.6543 19.2639C85.3524 19.1402 85.078 18.9579 84.847 18.7274C84.6159 18.497 84.4329 18.223 84.3085 17.9214C84.1841 17.6197 84.1207 17.2964 84.122 16.9701C84.1086 16.6355 84.1629 16.3017 84.2817 15.9886C84.4004 15.6755 84.5812 15.3897 84.8132 15.1482C85.0452 14.9067 85.3236 14.7146 85.6317 14.5833C85.9397 14.4521 86.2711 14.3844 86.606 14.3844C86.9409 14.3844 87.2723 14.4521 87.5803 14.5833C87.8884 14.7146 88.1668 14.9067 88.3988 15.1482C88.6308 15.3897 88.8116 15.6755 88.9303 15.9886C89.0491 16.3017 89.1034 16.6355 89.09 16.9701Z'
											stroke='#B49635'
											strokeWidth='4'
											mask='url(#path-1-inside-1_8408_163622)'
										/>
									</svg>

									<div className={s.Group_Name}>Corporate Lawyers</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>Real Estate Agents</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>Real Estate Lawyers</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>
										Divorce/Inheritance Lawyers
									</div>
								</div>

								<div className={s.Group}>
									<svg
										width='84'
										height='91'
										viewBox='0 0 84 91'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Group_Icon}
									>
										<path
											d='M43.5 75.8594V77.3594H40.5V75.8594V74.8594L39.5 74.8594C37.6385 74.8593 35.8228 74.2823 34.3028 73.2076C32.7829 72.1329 31.6334 70.6135 31.0128 68.8585L31.0081 68.8452L31.0031 68.8321C30.9309 68.645 30.897 68.4453 30.9034 68.2448C30.9098 68.0444 30.9563 67.8472 31.0402 67.665C31.1241 67.4829 31.2436 67.3194 31.3918 67.1842C31.54 67.0491 31.7138 66.945 31.9029 66.8782C32.092 66.8114 32.2926 66.7832 32.4928 66.7952C32.693 66.8073 32.8888 66.8594 33.0685 66.9484C33.2482 67.0374 33.4083 67.1616 33.5391 67.3136C33.67 67.4655 33.7691 67.6422 33.8306 67.8331L33.8351 67.8472L33.84 67.8612C34.6672 70.1928 36.8886 71.8594 39.5 71.8594H40.5V70.8594V60.8594V59.8594H39.5C37.1131 59.8594 34.8239 58.9112 33.136 57.2233C31.4482 55.5355 30.5 53.2463 30.5 50.8594C30.5 48.4724 31.4482 46.1832 33.136 44.4954C34.8239 42.8076 37.1131 41.8594 39.5 41.8594H40.5V40.8594V39.3594H43.5V40.8594V41.8594L44.5 41.8594C46.3615 41.8594 48.1772 42.4365 49.6972 43.5112C51.2171 44.5859 52.3666 46.1053 52.9872 47.8603C53.0527 48.0459 53.081 48.2426 53.0705 48.4392C53.0601 48.6359 53.0109 48.8287 52.926 49.0064C52.841 49.1841 52.7219 49.3434 52.5753 49.4751C52.4288 49.6068 52.2578 49.7083 52.072 49.7739C51.8863 49.8395 51.6894 49.8679 51.4927 49.8574C51.2959 49.8469 51.1032 49.7978 50.9255 49.7128C50.5665 49.5412 50.2904 49.2341 50.1579 48.8589L50.1577 48.8584C49.7439 47.6886 48.9776 46.6758 47.9643 45.9597C46.951 45.2435 45.7406 44.8591 44.4998 44.8594L43.5 44.8596V45.8594V55.8594V56.8594H44.5C46.8869 56.8594 49.1761 57.8076 50.864 59.4954C52.5518 61.1832 53.5 63.4724 53.5 65.8594C53.5 68.2463 52.5518 70.5355 50.864 72.2233C49.1761 73.9112 46.8869 74.8594 44.5 74.8594H43.5V75.8594ZM40.5 45.8594V44.8594H39.5C37.9087 44.8594 36.3826 45.4915 35.2574 46.6167C34.1321 47.742 33.5 49.2681 33.5 50.8594C33.5 52.4507 34.1321 53.9768 35.2574 55.102C36.3826 56.2272 37.9087 56.8594 39.5 56.8594H40.5V55.8594V45.8594ZM43.5 70.8594V71.8594H44.5C46.0913 71.8594 47.6174 71.2272 48.7426 70.102C49.8679 68.9768 50.5 67.4507 50.5 65.8594C50.5 64.2681 49.8679 62.742 48.7426 61.6167C47.6174 60.4915 46.0913 59.8594 44.5 59.8594H43.5V60.8594V70.8594Z'
											stroke='#B49635'
											strokeWidth='2'
										/>
										<path
											d='M15.3208 8.31068L15.322 8.31008C21.3694 5.35048 31.2815 1.85938 42.0974 1.85938C52.6862 1.85938 62.3347 5.20464 68.3482 8.12397L68.6866 8.28824C68.6878 8.28881 68.6889 8.28939 68.6901 8.28996C70.0365 8.95594 71.1813 9.59069 72.0914 10.1473L63.4396 22.7948L62.9763 23.472L63.5501 24.0586C68.8011 29.4268 73.7578 36.2789 77.3088 43.5271C80.8642 50.7846 82.9758 58.3679 82.6297 65.217C82.2856 72.0245 79.5187 78.121 73.2494 82.5501C66.936 87.0104 56.9678 89.8519 42.0974 89.8519C27.2246 89.8519 17.2252 87.0614 10.8716 82.6615C4.56352 78.2932 1.75254 72.2726 1.36676 65.5217C0.978479 58.727 3.05153 51.1714 6.59248 43.8739C10.1286 36.5864 15.0944 29.6278 20.3973 24.0483L20.9526 23.464L20.4995 22.7973L11.9074 10.1549C12.4168 9.84712 12.9966 9.5161 13.6426 9.17196L13.6426 9.17196L13.6461 9.17011C14.1661 8.89044 14.7243 8.60159 15.3208 8.31068ZM58.6649 24.1216L58.9716 24.0126L59.1553 23.7439L66.5478 12.9364L67.7181 11.2256L65.6506 11.3745C58.6885 11.8757 50.4376 13.5073 42.5143 15.8013C37.0942 17.367 31.0154 17.1406 25.3116 16.0885C23.8766 15.8225 22.4514 15.5057 21.0388 15.139L18.4679 14.4715L19.9602 16.6687L24.7602 23.7362L24.9439 24.0068L25.2521 24.1165C35.7565 27.8562 48.1582 27.8561 58.6649 24.1216ZM23.0603 26.5016L22.4279 26.2573L21.9669 26.7542C17.0872 32.0137 12.5466 38.4673 9.28778 45.1828L9.28771 45.1829C5.87709 52.2143 4.00839 59.2468 4.3591 65.3517C4.69734 71.281 7.10897 76.408 12.5753 80.1963L12.5758 80.1966C18.2275 84.1087 27.5296 86.8519 42.0949 86.8519C56.6478 86.8519 65.911 84.0603 71.5145 80.1011L71.5146 80.101C76.9438 76.2636 79.3275 71.0672 79.6312 65.0649L79.6312 65.0648C79.9426 58.8977 78.0347 51.8321 74.6104 44.8467L74.6084 44.8428C71.3221 38.2118 67.0613 32.1103 61.9679 26.7411L61.5068 26.255L60.8818 26.4967C49.0763 31.0619 34.8659 31.062 23.0603 26.5016ZM19.4342 9.72886L16.875 10.8151L19.5398 11.6079C21.5699 12.2118 23.6944 12.738 25.8529 13.1377L25.8538 13.1378C31.3114 14.143 36.8728 14.3094 41.6782 12.9174L41.6796 12.917C47.0005 11.3669 52.4123 10.1478 57.8839 9.26666L58.0133 7.32184C53.3426 5.91556 47.8639 4.85938 42.0949 4.85938C33.3077 4.85938 25.1391 7.30747 19.4342 9.72886Z'
											stroke='#B49635'
											strokeWidth='2'
										/>
									</svg>

									<div className={s.Group_Name}>
										Compliance/Onboarding Specialists
									</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>
										Electronic Money Institutions Banks
									</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>Other Regulated Entities</div>
								</div>

								<div className={s.Group}>
									<svg
										width='100'
										height='101'
										viewBox='0 0 100 101'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Group_Icon}
									>
										<g clipPath='url(#clip0_8408_163623)'>
											<path
												d='M95.6974 81.7481L95.6977 81.7479C96.672 81.3587 97.5072 80.6866 98.0958 79.8182C98.6844 78.9498 98.9993 77.925 99 76.8759V22.7393C99 22.7392 99 22.7391 99 22.7391C98.9999 22.3148 98.8727 21.9002 98.6349 21.5488C98.3972 21.1975 98.0597 20.9254 97.6661 20.7675L95.6974 81.7481ZM95.6974 81.7481L50.7911 99.7106L50.7905 99.7108C50.2831 99.9142 49.7169 99.9142 49.2095 99.7108L49.2089 99.7106L4.30894 81.7481L4.3075 81.7475C3.33232 81.3592 2.49595 80.6874 1.90637 79.8189C1.31689 78.9506 1.00118 77.9255 1 76.876V22.7393C1 22.7392 1 22.7391 1 22.7391C1.00015 22.3148 1.1273 21.9002 1.36511 21.5488C1.60295 21.1974 1.94058 20.9252 2.3345 20.7673L46.8901 2.94257C46.8901 2.94255 46.8902 2.94254 46.8902 2.94252C48.8865 2.14416 51.1135 2.14416 53.1098 2.94252C53.1098 2.94254 53.1099 2.94255 53.1099 2.94257L97.6655 20.7673L95.6974 81.7481ZM11.1661 21.8106L8.8441 22.7393L11.1663 23.6676L26.1913 29.6739L26.5626 29.8223L26.9338 29.6738L65.3963 14.2926L67.7181 13.3641L65.3963 12.4356L51.5345 6.89208C50.5496 6.49736 49.4504 6.49736 48.4655 6.89208L11.1661 21.8106ZM73.8087 15.8043L73.4374 15.6558L73.0662 15.8043L34.6037 31.1856L32.2814 32.1142L34.6038 33.0426L49.6288 39.0489L50.0001 39.1973L50.3713 39.0488L88.8338 23.6676L91.1561 22.7389L88.8337 21.8105L73.8087 15.8043ZM94.75 27.3578V25.8808L93.3786 26.4293L52.7536 42.6793L52.125 42.9308V43.6078V93.1203V94.5974L53.4964 94.0488L94.1214 77.7988L94.75 77.5473V76.8703V27.3578ZM46.5036 94.055L47.875 94.6036V93.1266V43.6016V42.9244L47.2463 42.673L6.62127 26.4293L5.25 25.881V27.3578V76.8766V77.5536L5.87861 77.805L46.5036 94.055Z'
												stroke='#B49635'
												strokeWidth='2'
											/>
										</g>
										<defs>
											<clipPath id='clip0_8408_163623'>
												<rect
													width='100'
													height='100'
													fill='white'
													transform='translate(0 0.859375)'
												/>
											</clipPath>
										</defs>
									</svg>

									<div className={s.Group_Name}>Logistics Platforms</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>Marketplaces</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>Registered Agents</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>Co-Working</div>
								</div>

								<div className={s.Group}>
									<svg
										width='98'
										height='92'
										viewBox='0 0 98 92'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Group_Icon}
									>
										<path
											d='M4.20306 32.5206L4.18365 32.5317L4.16475 32.5437C3.93036 32.6921 3.66801 32.7918 3.39348 32.8368C3.11895 32.8817 2.83811 32.8709 2.56793 32.805C2.29775 32.7392 2.04401 32.6196 1.8219 32.4537C1.5998 32.2879 1.41398 32.0793 1.2754 31.8405C1.13683 31.6019 1.0483 31.3379 1.01496 31.0646C0.981621 30.7914 1.00414 30.5142 1.0812 30.2497C1.15826 29.9852 1.28834 29.7387 1.46383 29.5251C1.63933 29.3114 1.85664 29.1351 2.10286 29.0068L2.12045 28.9977L2.13766 28.9878L49.0504 2.13659L95.9419 28.9757C96.3813 29.2598 96.6946 29.6995 96.8188 30.2044C96.9446 30.7157 96.8672 31.2558 96.6022 31.7121C96.3372 32.1686 95.9046 32.5067 95.3937 32.6543C94.8884 32.8002 94.3464 32.7483 93.879 32.5099L49.5469 7.15149L49.0504 6.86748L48.5539 7.15149L4.20306 32.5206Z'
											stroke='#B49635'
											strokeWidth='2'
										/>
										<path
											d='M78.6348 68.2267V69.2267H79.6348H88.8108C89.3582 69.2267 89.8823 69.4433 90.2681 69.8273C90.6537 70.2113 90.8695 70.7311 90.8695 71.2722C90.8695 71.8133 90.6537 72.3332 90.2681 72.7171C89.8823 73.1012 89.3582 73.3177 88.8108 73.3177H9.28524C8.73785 73.3177 8.21376 73.1012 7.82801 72.7171C7.44241 72.3331 7.22656 71.8133 7.22656 71.2722C7.22656 70.7311 7.44241 70.2113 7.82801 69.8273C8.21376 69.4433 8.73785 69.2267 9.28524 69.2267H18.4613H19.4613V68.2267V46.7812H23.5786V68.2267V69.2267H24.5786H45.9894H46.9894V68.2267V46.7812H51.1067V68.2267V69.2267H52.1067H73.5174H74.5174V68.2267V46.7812H78.6348V68.2267Z'
											stroke='#B49635'
											strokeWidth='2'
										/>
										<path
											d='M10.3516 35.7266H87.8772V39.8176H10.3516V35.7266Z'
											stroke='#B49635'
											strokeWidth='2'
										/>
										<path
											d='M3.17196 81.4062H94.9323C95.4796 81.4062 96.0037 81.6228 96.3895 82.0069C96.7751 82.3908 96.9909 82.9107 96.9909 83.4518C96.9909 83.9929 96.7751 84.5127 96.3895 84.8966C96.0037 85.2807 95.4796 85.4973 94.9323 85.4973H3.17196C2.62457 85.4973 2.10047 85.2807 1.71473 84.8966C1.32913 84.5127 1.11328 83.9929 1.11328 83.4518C1.11328 82.9107 1.32913 82.3908 1.71473 82.0069C2.10047 81.6228 2.62457 81.4062 3.17196 81.4062Z'
											stroke='#B49635'
											strokeWidth='2'
										/>
										<path
											d='M31.8017 26.3555L49.0898 16.4679L49.0918 16.4668C49.3119 16.3402 49.562 16.2734 49.8168 16.2734C50.0717 16.2734 50.3217 16.3402 50.5419 16.4668L50.5433 16.4676L67.8062 26.3555H62.0108L50.2817 19.665L49.7856 19.382L49.2898 19.6655L37.5917 26.3555H31.8017Z'
											stroke='#B49635'
											strokeWidth='2'
										/>
									</svg>

									<div className={s.Group_Name}>Security Brokers</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>
										Financial Investment Companies
									</div>
									<div className={s.Group_Border}></div>
									<div className={s.Group_Name}>Wealth Management Offices</div>
								</div>
							</div>
						</div>

						<div className={s.Solutions_Options}>
							<div className={s.Solutions_Options_Title}>
								<h2>
									Our solution is suitable for both individuals and corporates
								</h2>
							</div>

							<div className={s.Solutions_Options_Content}>
								<div className={s.OptionsPlan}>
									<div className={s.OptionsPlan_Header}>
										<h2>Corporate</h2>
									</div>

									<div className={s.OptionsPlan_Body}>
										<ul className={s.OptionsPlan_List}>
											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>1</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>Data retrieval from government registrars</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>2</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>AML, PEP, Sanctions and Watchlists</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>3</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>Certificates from Government Registrars</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>4</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>
														Verification of Legal and Ownership Representation
													</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>5</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>
														Verification of Copies: Apostille Legalization
														Approval
													</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>6</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>Approval!</span>
												</div>
											</li>
										</ul>

										<BaseButton
											type='orange'
											title='Request proposal'
											className={s.OptionsPlan_Button}
										/>
									</div>
								</div>

								<div className={s.OptionsPlan}>
									<div className={s.OptionsPlan_Header}>
										<h2>Individuals</h2>
									</div>

									<div className={s.OptionsPlan_Body}>
										<ul className={s.OptionsPlan_List}>
											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>1</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>Automated Remote Identification</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>2</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>AML, PEP, Sanctions and Watchlists</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>3</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>Certificates from Government Registrars</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>4</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>
														Verification of Legal and Ownership Representation
													</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>5</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>
														Verification of Copies: Apostille Legalization
														Approval
													</span>
												</div>
											</li>

											<li className={s.OptionsPlan_List_Step}>
												<div className={s.OptionsPlan_List_Step_Number}>
													<span>6</span>
												</div>
												<div className={s.OptionsPlan_List_Step_Label}>
													<span>Approval!</span>
												</div>
											</li>
										</ul>

										<BaseButton
											type='orange'
											title='Request proposal'
											className={s.OptionsPlan_Button}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Solutions;
