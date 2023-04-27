import { BaseButton, BaseContainer, BaseInput } from '@base/index';
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

const Germany: React.FC = () => {
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
			<HeaderCountry image='germany-bg.jpeg' title='Germany' />

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
									<div className={s.Total_Value}>12 months</div>
								</div>

								<div className={s.Total}>
									<div className={s.Total_Label}>
										<span>Total cost</span>
									</div>
									<div className={s.Total_Value}>$ 155,500.00</div>
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
								<div className={s.Title}>
									<h2>
										We offer the following range of licenses for you in order to
										receive approval from BaFin.
									</h2>
								</div>

								<div className={s.StepByStepGuide}>
									<div className={s.StepByStepGuide_Title}>
										<h2>Step-by-step guide:</h2>
									</div>

									<ol className={s.StepByStepGuide_List}>
										<li>
											Preparation of draft documents <br /> Preparation of
											documents by our experts and also the client (or a
											contracted service provider, if needed).
										</li>
										<li>
											Establishment of the company <br /> Establishment of the
											company, the opening of the bank account and other
											corporate matters, e.g. designation of the board members.
										</li>
										<li>
											Application for the license <br /> Submission of the
											licensing documents and payment of the licensing fee.
										</li>
										<li>
											Official coordination of the documents <br />
											Answers to the official enquiries of the BaFin and
											provision of revised documents, if needed.
										</li>
										<li>
											The decision of the BaFin <br />
											The decision of the BaFin regarding the issuance of
											payment institution licence.
										</li>
									</ol>

									<div className={s.StepByStepGuide_Aside}>
										<p>
											The term licensing may be optimised by having several
											stages of the licensing procedure carried out
											simultaneously. Evidently, the procedure of licensing may
											also be facilitated by close cooperation between the
											client and us, which we consistently encourage in our
											practice. In our opinion, the legal documentation
											production stage and establishment of the company could
											take 1-2 months and the licensing procedure would take
											additional 2-6 months (the formal term for consideration
											is 3 months which may then be prolonged for an additional
											3 month period); the latter term mostly depends on the
											internal processes of the BaFin and the workload of
											responsible specialists.
										</p>
									</div>
								</div>

								<div className={s.LicensingCosts}>
									<div className={s.LicensingCosts_Title}>
										<h2>Licensing costs:</h2>
									</div>

									<div className={s.LicensingCosts_Table}>
										<div className={s.THead}>
											<div className={s.THead_Label}>Full licensing costs</div>
											<div className={s.THead_Value}>$ 155,500.00</div>
										</div>

										<div className={s.TBody}>
											<div className={s.Column}>
												<div className={s.Column_Label}>
													<span>Payment of retainer</span>
												</div>
												<div className={s.Column_Value}>$ 75,000.00</div>
											</div>

											<div className={s.Column}>
												<div className={s.Column_Label}>
													<span>
														Intermediate payment after the documents review
													</span>
												</div>
												<div className={s.Column_Value}>$ 40,500.00</div>
											</div>

											<div className={s.Column}>
												<div className={s.Column_Label}>
													<span>
														Payment before the submission of the documents
													</span>
												</div>
												<div className={s.Column_Value}>$ 40,000.00</div>
											</div>
										</div>
									</div>
								</div>

								<div className={s.OtherTasks}>
									<div className={s.OtherTasks_Title}>
										<h2>
											Other tasks relating to the licensing of e-money
											institutions which may require additional time include:
										</h2>
									</div>

									<ul className={s.OtherTasks_List}>
										<li>
											<span>
												Preparation of business model and business plan;
											</span>
										</li>
										<li>
											<span>
												Filling in the management positions (certain
												qualifications and experience requirements are
												applicable);
											</span>
										</li>
										<li>
											<span>
												Preparing the description of the IT system (and other
												planned technical solutions);
											</span>
										</li>
										<li>
											<span>Preparing the accountancy system description;</span>
										</li>
										<li>
											<span>
												Contracting third parties (e.g. auditing company).
											</span>
										</li>
									</ul>
								</div>

								<div className={s.Documents}>
									<div className={s.Documents_Title}>
										<h2>
											Documents for licensing of an electronic money
											institution:
										</h2>
									</div>

									<ol className={s.Documents_List}>
										<li>Articles of association;</li>
										<li>A programme of operations;</li>
										<li>
											A business plan, including a forecast budget for the first
											three financial years which demonstrates that the firm is
											able to operate soundly and employs the appropriate
											internal control systems, procedures and resources;
										</li>
										<li>
											The evidence that the minimum size of the equity capital
											does not fall below the required amount;
										</li>
										<li>
											A description of the measures taken for safeguarding the
											funds;
										</li>
										<li>
											A description of the governance arrangements and internal
											control mechanisms applied, including administrative, risk
											management and accounting procedures;
										</li>
										<li>
											A description of the internal control mechanisms
											established in order to comply with obligations in
											relation to the prevention of money laundering and
											terrorist financing;
										</li>
										<li>
											A description of the structural organisation, including
											the intended use of branches, agents, natural or legal
											persons through which the electronic money institution
											intends to distribute or redeem electronic money or other
											entities to which activities will be outsourced, and a
											description of participation in payment systems;
										</li>
										<li>
											The data on the identity of persons holding qualifying
											holdings in the authorised capital and/or voting
										</li>
										<li>
											Rights of the electronic money institution, the size of
											their holdings in the authorised capital and/or
										</li>
										<li>
											Voting rights, also evidence of the suitability of these
											persons taking into account the need to ensure
										</li>
										<li>
											The sound and prudent management of an electronic money
											institution;
										</li>
										<li>
											The identity of directors, including the persons
											responsible for the management of the firm;
										</li>
										<li>
											Money issuance activities of the electronic money
											institution as well as evidence that they are of
										</li>
										<li>
											Good repute and meet the requirements set forth by the
											legislation;
										</li>
										<li>
											Data of an audit firm which performs audits or a certified
											auditor independently performing audits;
										</li>
										<li>The address of the registered office.</li>
									</ol>
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

export default Germany;
