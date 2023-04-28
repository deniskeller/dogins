import { BaseButton, BaseContainer, BaseIcon, BaseInput } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import {
	CountryScrollLogo,
	HeaderCountry,
	SubmitForm,
} from '@content/landing/index';
import { useEffect, useState } from 'react';
import s from './Countries.module.scss';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

interface IValue {
	name: string;
	email: string;
}

const Usa: React.FC = () => {
	const [value, setValue] = useState<IValue>({
		name: '',
		email: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [submit, setSubmit] = useState(false);

	useEffect(() => {
		//скролим страницу до формы если на предыдущей нажали Request
		const value = localStorage.getItem('item');

		if (typeof value === 'string') {
			const parse = JSON.parse(value);

			if (parse == 'scroll') {
				scroller.scrollTo(`form`, {
					duration: 0,
					delay: 0,
					smooth: true,
					offset: -100,
				});
			}
		}

		return () => {
			localStorage.clear();
		};
	}, []);

	return (
		<>
			<HeaderCountry
				image='usa-bg.jpeg'
				title='Usa'
				background_position='100% 60%'
			/>

			<div className='Wrapper-l'>
				<BaseContainer className={s.BaseContainer}>
					<div className={s.Country}>
						<div className={s.Country_Content}>
							<div className={s.Country_Content_Header}>
								<h1>YOUR PERSONAL LICENSING OFFER</h1>
							</div>

							<div className={s.Country_Content_RequestOffer}>
								<div className={s.Total}>
									<div className={s.Total_Label}>
										<span>Total term</span>
									</div>
									<div className={s.Total_Value}>3-12 months</div>
								</div>

								<div className={s.Total}>
									<div className={s.Total_Label}>
										<span>Total cost</span>
									</div>
									<div className={s.Total_Value}>$ 175,500.00 </div>
								</div>

								<BaseButton
									title='Request offer'
									type='green'
									className={s.Button}
									onClick={() =>
										scroller.scrollTo(`form`, {
											duration: 0,
											delay: 0,
											smooth: true,
											offset: -100,
										})
									}
								/>
							</div>

							<div className={s.Country_Content_Licenses}>
								<BaseIcon
									icon={ALL_ICONS.LOGO}
									viewBox='0 0 280 316'
									className={s.Logo}
								/>

								<div className={s.Title}>
									<h2>
										We offer the following range of licenses for you in order to
										receive the approval from Financial Conduct Authority.
									</h2>
								</div>

								<div className={s.StepByStepGuide}>
									<div className={s.StepByStepGuide_Title}>
										<h2>Step-by-step guide:</h2>
									</div>

									<ol className={s.StepByStepGuide_List}>
										<li>
											Preparation of draft documents: <br /> Preparation of
											documents by our experts and also the client (or a
											contracted service provider, if needed).
										</li>
										<li>
											Establishment of the company: <br /> Establishment of the
											company, the opening of the bank account and other
											corporate matters, e.g. designation of the board members.
										</li>
										<li>
											Application for the license: <br /> Submission of the
											licensing documents and payment of the licensing fee.
										</li>
										<li>
											Official coordination of the documents: <br />
											Answers to the official enquiries of the government
											authority and provision of revised documents, if needed.
										</li>
										<li>
											The decision of the government authority: <br />
											The decision of the government authority regarding the
											issuance of payment institution licence.
										</li>
									</ol>
								</div>

								<div className={s.LicensingCosts}>
									<div className={s.LicensingCosts_Title}>
										<h2>Licensing costs:</h2>
									</div>

									<div className={s.LicensingCosts_Table}>
										<div className={s.THead}>
											<div className={s.THead_Label}>Full licensing costs</div>
											<div className={s.THead_Value}>$ 175,000.00</div>
										</div>

										<div className={s.TBody}>
											<div className={s.Column}>
												<div className={s.Column_Label}>
													<span>Payment of retainer</span>
												</div>
												<div className={s.Column_Value}>$ 75,500.00</div>
											</div>

											<div className={s.Column}>
												<div className={s.Column_Label}>
													<span>
														Intermediate payment after the documents review
													</span>
												</div>
												<div className={s.Column_Value}>$ 50,000.00</div>
											</div>

											<div className={s.Column}>
												<div className={s.Column_Label}>
													<span>
														Payment before the submission of the documents
													</span>
												</div>
												<div className={s.Column_Value}>$ 50,000.00</div>
											</div>
										</div>
									</div>
								</div>

								<div className={s.OtherTasks}>
									<ul className={s.OtherTasks_List}>
										<li>
											<span>Time to obtain the license: 90 days</span>
										</li>
										<li>
											<span>
												Scope: transmit currency, monetary value, or payment
												instruments, either by wire, facsimile, electronic
												transfer, courier, the Internet, or through bill payment
												services or other businesses that facilitate the such
												transfer, within this country or to or from locations
												outside this country.
											</span>
										</li>
										<li>
											<span>
												Requirements: <br />
												Provision of a surety bond – or an alternative security
												device – in an amount between $50,000 and $2,000,000.
												The amount is calculated as 2% of total projected
												transmissions during the first year.
											</span>
										</li>
										<li>
											<span>
												Cost: between 1 and 12,5% of the bond amount per year{' '}
												<br /> A net worth of at least 100.000$ (assets -
												liabilities), <br /> Financial statements and business
												plan(s), AML compliance program, <br /> Background
												checks.
											</span>
										</li>
									</ul>

									<div className={s.OtherTasks_Aside}>
										<p>
											The license is valid only for the particular State and
											abroad. To provide the services in the the whole U.S is it
											necessary to fill a Nationwide Multistate license.
										</p>
									</div>
								</div>
							</div>

							<div className={s.Country_Content_Form} id='form'>
								{!submit ? (
									<div
										className={s.Form}
										style={{ opacity: !submit ? '1' : '0' }}
									>
										<div className={s.Form_Title}>
											<h3>Let's talk</h3>
										</div>

										<div className={s.Form_Subtitle}>
											<p>
												If you are interested, please contact us by email &nbsp;
												<a href=''>info@doqins.com</a>&nbsp; or fill in the form
												and we will reply to you within 24 hours
											</p>
										</div>

										<div className={s.Form_Inputs}>
											<BaseInput
												theme='dark'
												name='name'
												label='Name'
												value={value.name}
												onChange={(val: string) => setNewValue(val, 'name')}
												className={s.Input}
											/>

											<BaseInput
												theme='dark'
												name='email'
												label='Email'
												value={value.email}
												onChange={(val: string) => setNewValue(val, 'email')}
												className={s.Input}
											/>
										</div>

										<BaseButton
											title='Submit'
											type='submit'
											className={s.Form_Button}
											onClick={() => setSubmit(true)}
										/>
									</div>
								) : (
									<div
										className={s.Form_Submit}
										style={{ opacity: submit ? '1' : '0' }}
									>
										<SubmitForm
											borderColor='#026C51'
											iconColor='#026C51'
											titleColor='#121212'
											subtitleColor='rgba(26, 26, 26, 0.6)'
										/>
									</div>
								)}
							</div>
						</div>
						<CountryScrollLogo />
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Usa;
