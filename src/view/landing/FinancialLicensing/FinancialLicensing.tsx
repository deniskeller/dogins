import { BaseCheckbox, BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { PricingHeader, PricingInsideNavbar } from '@content/landing/index';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './FinancialLicensing.module.scss';

const FinancialLicensing: React.FC = () => {
	const router = useRouter();

	const [selected, setSelected] = useState(false);
	const [selected2, setSelected2] = useState(false);
	const [selected3, setSelected3] = useState(false);

	return (
		<>
			<PricingHeader
				image='pricing-header-bg.jpeg'
				title='Financial Licensing'
			/>

			<div className={s.Wrapper}>
				<BaseContainer className={s.BaseContainer}>
					<div className={s.FinancialLicensing}>
						<div className={s.FinancialLicensing_Body}>
							{/* 1  */}
							<div className={s.FinancialLicensing_Item}>
								<div className={s.FinancialLicensing_Item_Header}>
									<h1>AEMI</h1>
								</div>

								<div className={s.FinancialLicensing_Item_Total}>
									<div className={s.FinancialLicensing_Item_Total_Label}>
										<BaseCheckbox
											checked={selected}
											onChange={() => setSelected(!selected)}
											className={s.Checkbox}
										></BaseCheckbox>

										<span className={s.Title}>Total Cost</span>
									</div>

									<div className={s.FinancialLicensing_Item_Total_Value}>
										£ 1, 061,000
									</div>
								</div>

								<div className={s.FinancialLicensing_Item_ListComponents}>
									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>Requirements for the authorised capital</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 305,000</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>
													Commission in the FCA treasury for a financial company
												</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 6,000</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>
													Cost of preparing the documents and infrastructure
												</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 750,000</div>
									</div>
								</div>
							</div>
							{/* 2 */}
							<div className={s.FinancialLicensing_Item}>
								<div className={s.FinancialLicensing_Item_Header}>
									<h1>SEMI</h1>
								</div>

								<div className={s.FinancialLicensing_Item_Total}>
									<div className={s.FinancialLicensing_Item_Total_Label}>
										<BaseCheckbox
											checked={selected2}
											onChange={() => setSelected2(!selected2)}
											className={s.Checkbox}
										></BaseCheckbox>

										<span className={s.Title}>Total Cost</span>
									</div>

									<div className={s.FinancialLicensing_Item_Total_Value}>
										£ 201,500
									</div>
								</div>

								<div className={s.FinancialLicensing_Item_ListComponents}>
									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected2 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>Requirements for the authorised capital</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 0,00</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected2 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>
													Commission in the FCA treasury for a financial company
												</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 1,500</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected2 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>
													Cost of preparing the documents and infrastructure
												</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 200,000</div>
									</div>
								</div>
							</div>
							{/* 3 */}
							<div className={s.FinancialLicensing_Item}>
								<div className={s.FinancialLicensing_Item_Header}>
									<h1>Sublicensing</h1>
								</div>

								<div className={s.FinancialLicensing_Item_Total}>
									<div className={s.FinancialLicensing_Item_Total_Label}>
										<BaseCheckbox
											checked={selected3}
											onChange={() => setSelected3(!selected3)}
											className={s.Checkbox}
										></BaseCheckbox>

										<span className={s.Title}>Total Cost</span>
									</div>

									<div className={s.FinancialLicensing_Item_Total_Value}>
										£ 775,000
									</div>
								</div>

								<div className={s.FinancialLicensing_Item_ListComponents}>
									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected3 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>Covernment Application Fee</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 25,000</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected3 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>Application Fee</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 750,000</div>
									</div>
								</div>

								<div
									className={`${s.FinancialLicensing_Item_Total} ${s.Additional}`}
								>
									<div className={s.FinancialLicensing_Item_Total_Label}>
										<span className={s.Title}>Expenses on the sublicense</span>
									</div>
								</div>

								<div className={s.FinancialLicensing_Item_ListComponents}>
									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected3 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>Drafting the business plan</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 10,000</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected3 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>Government fee</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 2,000</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected3 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>One time set up fee of the technical system</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 15,000</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected3 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>Application design and sending to the FCA</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 10,000</div>
									</div>

									<div className={s.Component}>
										<div className={s.Component_Label}>
											<BaseIcon
												icon={ALL_ICONS.ARROW_DIAGONALLY}
												viewBox='0 0 23 23'
												className={`${s.Component_Label_Icon} ${
													selected3 ? s.Component_Label_Icon_Active : ''
												}`}
											/>
											<div className={s.Component_Label_Name}>
												<p>Drafting of the internal procedures for the agent</p>
											</div>
										</div>

										<div className={s.Component_Value}>£ 5,500</div>
									</div>
								</div>
							</div>
						</div>

						<PricingInsideNavbar />
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default FinancialLicensing;
