import { BaseCheckbox, BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { PricingHeader2, PricingInsideNavbar } from '@content/landing/index';
import React, { useState } from 'react';
import s from './WebsiteDevelopment.module.scss';

const WebsiteDevelopment: React.FC = () => {
	const [selected, setSelected] = useState(false);
	const [selected2, setSelected2] = useState(false);

	return (
		<>
			<PricingHeader2
				image='pricing-header-bg2.jpeg'
				title='Website Development'
			/>

			<BaseContainer className={s.BaseContainer}>
				<div className={s.WebsiteDevelopment}>
					<div className={s.WebsiteDevelopment_Body}>
						{/* 1  */}
						<div className={s.WebsiteDevelopment_Item}>
							<div className={s.WebsiteDevelopment_Item_Header}>
								<h1>Custom design & dashboard development</h1>
							</div>

							<div className={s.WebsiteDevelopment_Item_Total}>
								<div className={s.WebsiteDevelopment_Item_Total_Label}>
									<BaseCheckbox
										checked={selected}
										onChange={() => setSelected(!selected)}
										className={s.Checkbox}
									></BaseCheckbox>

									<span className={s.Title}>Total Cost</span>
								</div>

								<div className={s.WebsiteDevelopment_Item_Total_Value}>
									£ 1, 061,000
								</div>
							</div>

							<div className={s.WebsiteDevelopment_Item_ListComponents}>
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
											<p>Cost of preparing the documents and infrastructure</p>
										</div>
									</div>

									<div className={s.Component_Value}>£ 750,000</div>
								</div>
							</div>
						</div>
						{/* 2 */}
						<div className={s.WebsiteDevelopment_Item}>
							<div className={s.WebsiteDevelopment_Item_Header}>
								<h1>Custom design & Third-Party platform integration</h1>
							</div>

							<div className={s.WebsiteDevelopment_Item_Total}>
								<div className={s.WebsiteDevelopment_Item_Total_Label}>
									<BaseCheckbox
										checked={selected2}
										onChange={() => setSelected2(!selected2)}
										className={s.Checkbox}
									></BaseCheckbox>

									<span className={s.Title}>Total Cost</span>
								</div>

								<div className={s.WebsiteDevelopment_Item_Total_Value}>
									£ 201,500
								</div>
							</div>

							<div className={s.WebsiteDevelopment_Item_ListComponents}>
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
											<p>Cost of preparing the documents and infrastructure</p>
										</div>
									</div>

									<div className={s.Component_Value}>£ 200,000</div>
								</div>
							</div>
						</div>
					</div>

					<PricingInsideNavbar
						label_prev_link='Additional financial services'
						label_next_link='Company registration in United Kingdom'
						prev_link='/coming-soon'
						next_link='/coming-soon'
					/>
				</div>
			</BaseContainer>
		</>
	);
};

export default WebsiteDevelopment;
