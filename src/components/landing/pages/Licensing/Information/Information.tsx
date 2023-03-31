import { BaseButton, BaseContainer } from '@base/index';
import React from 'react';
import s from './Information.module.scss';

type Props = {};

const Information: React.FC<Props> = () => {
	return (
		<>
			<div className={s.Information}>
				<BaseContainer>
					<div className={s.Information_Title}>
						<h2>
							Below you may find our pricing information and commercial proposal
							about each country and license that we offer assistance with:
						</h2>
					</div>
				</BaseContainer>

				<BaseContainer className={s.BaseContainer}>
					<div className={s.Information_Body}>
						<div className={s.InformationCard}>
							<svg
								width='82'
								height='82'
								viewBox='0 0 82 82'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={s.InformationCard_Icon}
							>
								<path
									d='M30.75 41.0027L37.5833 47.8361L51.25 34.1694M70.4445 20.4492C69.7453 20.4846 69.0414 20.5026 68.3333 20.5026C57.8324 20.5026 48.2535 16.5548 40.9998 10.0625C33.7461 16.5546 24.1674 20.5022 13.6667 20.5022C12.9586 20.5022 12.2548 20.4842 11.5556 20.4488C10.7034 23.7411 10.25 27.194 10.25 30.7527C10.25 49.8571 23.3164 65.9096 41 70.461C58.6836 65.9096 71.75 49.8571 71.75 30.7527C71.75 27.1941 71.2966 23.7414 70.4445 20.4492Z'
									stroke='#B49635'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>

							<div className={s.InformationCard_Name}>
								<span>Compliance</span>
							</div>

							<div className={s.InformationCard_Parameters}>
								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Head of Compliance, Risk or Legal</span>
									</div>
									<div className={s.Value}>$600 – $2000</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Senior Compliance/AML Manager/VP</span>
									</div>
									<div className={s.Value}>$550 – $900</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Compliance Manager/AML/AVP</span>
									</div>
									<div className={s.Value}>$350 – $550</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Compliance Associate</span>
									</div>
									<div className={s.Value}>$180 – $300</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>KYC Analyst</span>
									</div>
									<div className={s.Value}>$250 – $450</div>
								</div>
							</div>

							<BaseButton
								title='Request'
								type='submit'
								className={s.InformationCard_Button}
							/>
						</div>

						<div className={s.InformationCard}>
							<svg
								width='82'
								height='82'
								viewBox='0 0 82 82'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={s.InformationCard_Icon}
							>
								<path
									d='M30.75 41.0027L37.5833 47.8361L51.25 34.1694M70.4445 20.4492C69.7453 20.4846 69.0414 20.5026 68.3333 20.5026C57.8324 20.5026 48.2535 16.5548 40.9998 10.0625C33.7461 16.5546 24.1674 20.5022 13.6667 20.5022C12.9586 20.5022 12.2548 20.4842 11.5556 20.4488C10.7034 23.7411 10.25 27.194 10.25 30.7527C10.25 49.8571 23.3164 65.9096 41 70.461C58.6836 65.9096 71.75 49.8571 71.75 30.7527C71.75 27.1941 71.2966 23.7414 70.4445 20.4492Z'
									stroke='#B49635'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>

							<div className={s.InformationCard_Name}>
								<span>Risk</span>
							</div>

							<div className={s.InformationCard_Parameters}>
								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Head of Compliance, Risk or Legal</span>
									</div>
									<div className={s.Value}>$600 – $2000</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Chief Risk Officer</span>
									</div>
									<div className={s.Value}>$1500 – $3000</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Head of Risk</span>
									</div>
									<div className={s.Value}>$900 – $2000</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Senior Risk Manager</span>
									</div>
									<div className={s.Value}>$500 – $950</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Risk Manager</span>
									</div>
									<div className={s.Value}>$400 – $600</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Risk Analyst</span>
									</div>
									<div className={s.Value}>$250 – $450</div>
								</div>
							</div>

							<BaseButton
								title='Request'
								type='submit'
								className={s.InformationCard_Button}
							/>
						</div>

						<div className={s.InformationCard}>
							<svg
								width='82'
								height='82'
								viewBox='0 0 82 82'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className={s.InformationCard_Icon}
							>
								<path
									d='M30.75 41.0027L37.5833 47.8361L51.25 34.1694M70.4445 20.4492C69.7453 20.4846 69.0414 20.5026 68.3333 20.5026C57.8324 20.5026 48.2535 16.5548 40.9998 10.0625C33.7461 16.5546 24.1674 20.5022 13.6667 20.5022C12.9586 20.5022 12.2548 20.4842 11.5556 20.4488C10.7034 23.7411 10.25 27.194 10.25 30.7527C10.25 49.8571 23.3164 65.9096 41 70.461C58.6836 65.9096 71.75 49.8571 71.75 30.7527C71.75 27.1941 71.2966 23.7414 70.4445 20.4492Z'
									stroke='#B49635'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>

							<div className={s.InformationCard_Name}>
								<span>Legal</span>
							</div>

							<div className={s.InformationCard_Parameters}>
								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Head of Compliance, Risk or Legal</span>
									</div>
									<div className={s.Value}>$600 – $2000</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Head of Legal</span>
									</div>
									<div className={s.Value}>$1000 – $2000</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Senior Legal Counsel</span>
									</div>
									<div className={s.Value}>$650 – $850</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Legal Counsel</span>
									</div>
									<div className={s.Value}>$400 – $650</div>
								</div>

								<div className={s.InformationCard_Parameters_Row}>
									<div className={s.Label}>
										<span>Paralegal</span>
									</div>
									<div className={s.Value}>$150 – $300</div>
								</div>
							</div>

							<BaseButton
								title='Request'
								type='submit'
								className={s.InformationCard_Button}
							/>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Information;
