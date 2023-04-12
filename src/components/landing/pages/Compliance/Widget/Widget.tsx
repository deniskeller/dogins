import {
	BaseButton,
	BaseCheckbox,
	BaseContainer,
	BaseIcon,
	BaseRadioButton,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import {
	WidgetInput,
	WidgetSelect,
	WidgetTooltip,
} from '@content/landing/index';
import { countries } from '@services/index';
import { WidgetPopup } from 'components/landing/modals';
import React, { useEffect, useState } from 'react';
import s from './Widget.module.scss';

const companies_list = [
	{
		value: 1,
		name: 'ЗАО "ДИАМОНД-BW"',
		code: 1020502526153,
	},
	{
		value: 2,
		name: 'ООО "ДИАМОНД"',
		code: 1180280030809,
	},
	{
		value: 3,
		name: 'ЗАО "ООО "ДИАМОНД"',
		code: 1160571066919,
	},
];

const documents_list = [
	{
		value: 'Company search report (electronic)',
		label: 'Company search report (electronic)',
	},
	{
		value: 'Historical search report',
		label: 'Historical search report',
	},
];

type Props = {};

interface IValue {
	name: string;
	countries: string;
	document: string;
}

const Widget: React.FC<Props> = () => {
	const [value, setValue] = React.useState<IValue>({
		name: '',
		countries: '',
		document: '',
	});

	const setNewValue = (val: string | number | File[], key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [radioValue, setRadioValue] = useState(1);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [isChecked2, setIsChecked2] = useState<boolean>(false);
	const [isChecked3, setIsChecked3] = useState<boolean>(false);

	useEffect(() => {
		console.log('value.countries: ', value.countries);
	}, [value.countries]);

	const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);
	const [tooltipVisible2, setTooltipVisible2] = React.useState<boolean>(false);
	const [tooltipVisible3, setTooltipVisible3] = React.useState<boolean>(false);
	const [tooltipVisible4, setTooltipVisible4] = React.useState<boolean>(false);

	const [popup, setPopup] = React.useState<boolean>(false);

	return (
		<>
			<div className='Wrapper'>
				<div className={s.Widget}>
					<div className={s.Widget_Header_Container}>
						<BaseContainer>
							<div className={s.Widget_Header}>
								<div className={s.Step}>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Step_Icon}
									>
										<path
											d='M16.6667 29.1667V35.4167M25 29.1667V35.4167M33.3333 29.1667V35.4167M6.25 43.75H43.75M6.25 20.8333H43.75M6.25 14.5833L25 6.25L43.75 14.5833M8.33333 20.8333H41.6667V43.75H8.33333V20.8333Z'
											stroke='white'
											strokeOpacity='0.6'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>

									<div className={s.Step_Label}>1. Type your company name</div>
								</div>

								<div className={s.Step}>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Step_Icon}
									>
										<path
											d='M6.25 43.75V35.4167M6.25 35.4167V10.4167C6.25 8.11548 8.11548 6.25 10.4167 6.25H23.9583L26.0417 8.33333H43.75L37.5 20.8333L43.75 33.3333H26.0417L23.9583 31.25H10.4167C8.11548 31.25 6.25 33.1155 6.25 35.4167ZM25 7.29167V18.75'
											stroke='white'
											strokeOpacity='0.6'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>

									<div className={s.Step_Label}>2. Choose the Jurisdiction</div>
								</div>

								<div className={s.Step}>
									<svg
										width='50'
										height='50'
										viewBox='0 0 50 50'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className={s.Step_Icon}
									>
										<path
											d='M18.7493 25H31.2494M18.7493 33.3333H31.2494M35.416 43.75H14.5827C12.2815 43.75 10.416 41.8845 10.416 39.5833V10.4167C10.416 8.11548 12.2815 6.25 14.5827 6.25H26.2197C26.7723 6.25 27.3022 6.46949 27.6929 6.86019L38.9725 18.1398C39.3632 18.5305 39.5827 19.0604 39.5827 19.6129V39.5833C39.5827 41.8845 37.7172 43.75 35.416 43.75Z'
											stroke='white'
											strokeOpacity='0.6'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>

									<div className={s.Step_Label}>3. Select Document</div>
								</div>
							</div>
						</BaseContainer>
					</div>

					<BaseContainer className={s.BaseContainer}>
						<div className={s.Widget_Body}>
							<div className={s.Request}>
								<div className={s.Request_Actions}>
									<WidgetInput
										label='Enter name'
										name='name'
										value={value.name}
										onChange={(val: string) => setNewValue(val, 'name')}
										className={s.Input}
									/>

									<WidgetSelect
										label='Select country'
										options={countries}
										onChange={(val: string) => setNewValue(val, 'countries')}
										className={s.Select}
									/>

									<BaseButton
										title='New request'
										className={s.Button}
										onClick={() => setPopup(true)}
									/>
								</div>

								<div className={s.Request_Message}>
									<p>
										The name <span>test</span> was not found. It is possible,
										that you entered non-existing name or online service is
										experiencing technical troubles. You may send the Request
										anyway and we will process it manually.
									</p>
								</div>
							</div>

							<div className={s.ListOfCompanies}>
								{companies_list?.map((item) => {
									return (
										<div className={s.Company} key={item.value}>
											<BaseRadioButton
												value={item.value}
												checked={radioValue === item.value}
												onChange={() => setRadioValue(item.value)}
												className={s.Company_Radiobutton}
											/>

											<div className={s.Company_Name}>
												<span>{item.name}</span>
											</div>

											<div className={s.Company_Code}>
												<span>{item.code}</span>
											</div>
										</div>
									);
								})}
							</div>

							<div className={s.Table}>
								<div className={s.Border}></div>
								<div className={s.Body}>
									<div className={s.Table_Header}>
										<div className={s.Table_Header_Label}>
											<span>Name</span>
										</div>
										<div className={s.Table_Header_Label}>
											<span>Price</span>
										</div>
										<div className={s.Table_Header_Label}>
											<span>Info</span>
										</div>
									</div>

									<div className={s.Table_Body}>
										{/* row 1 */}
										<div className={s.Table_Body_Row}>
											<div className={s.Column}>
												{value.document ? (
													<BaseIcon
														icon={ALL_ICONS.CHECK}
														viewBox='0 0 30 30'
														className={s.IconCheck}
													/>
												) : (
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
														className={s.IconCheck}
													>
														<path
															d='M12.0015 9V11M12.0015 15H12.0115M5.0733 19H18.9297C20.4693 19 21.4316 17.3333 20.6618 16L13.7336 4C12.9637 2.66667 11.0392 2.66667 10.2694 4L3.34125 16C2.57145 17.3333 3.5337 19 5.0733 19Z'
															stroke='white'
															strokeOpacity='0.7'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>
												)}

												<WidgetSelect
													label='Select Document'
													options={documents_list}
													onChange={(val: string) =>
														setNewValue(val, 'document')
													}
													className={s.Select}
												/>
											</div>

											<div className={s.Column}>
												<div className={s.Price}>
													<span>20.00</span>&nbsp;EUR
												</div>
											</div>

											<div className={s.Column}>
												<div className={s.Tooltip}>
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
														className={`${s.Tooltip_Icon} ${
															tooltipVisible ? s.Tooltip_Icon_TooltipOpen : ''
														}`}
														onClick={() => setTooltipVisible(true)}
													>
														<path
															d='M8.22766 9C8.77678 7.83481 10.2584 7 12.0001 7C14.2092 7 16.0001 8.34315 16.0001 10C16.0001 11.3994 14.7224 12.5751 12.9943 12.9066C12.4519 13.0106 12.0001 13.4477 12.0001 14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
															stroke='white'
															strokeOpacity='0.7'
															strokeWidth='1.5'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<WidgetTooltip
														title='Company search report (electronic)'
														tooltipVisible={tooltipVisible}
														onClick={() => setTooltipVisible(false)}
														markers={['GO', 'SU', 'e']}
													>
														<li>Language: English and Local (Dari/Pashto)</li>
														<li>No hard copy of a document</li>
														<li>
															Contains general company information including
															details about director and officers of the company
														</li>
														<li>
															Please note that some companies haven’t got the
															names of the director and officers in English
														</li>
														<li>Up to 3 working days</li>
													</WidgetTooltip>
												</div>
											</div>
										</div>

										{/* row 2 */}
										<div className={s.Table_Body_Row}>
											<div className={s.Column}>
												<BaseIcon
													icon={ALL_ICONS.CHECK}
													viewBox='0 0 30 30'
													className={s.CheckboxTick}
												/>
												<div className={s.Name}>Processing fee</div>
											</div>

											<div className={s.Column}>
												<div className={s.Price}>
													<span>20.00</span>&nbsp;EUR
												</div>
											</div>

											<div className={s.Column}></div>
										</div>

										{/* row 3 */}
										<div className={s.Table_Body_Row}>
											<div className={s.Column}>
												<BaseCheckbox
													type='green'
													checked={isChecked}
													onChange={() => setIsChecked(!isChecked)}
													className={s.Form_Checkbox}
												>
													Apostille
												</BaseCheckbox>
											</div>

											<div className={s.Column}>
												{/* <div className={s.Price}>
													<span>20.00</span>&nbsp;EUR
												</div> */}

												<div className={s.Status}>
													<span>Not Available</span>
												</div>
											</div>

											<div className={s.Column}>
												<div className={s.Tooltip}>
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
														className={`${s.Tooltip_Icon} ${
															tooltipVisible2 ? s.Tooltip_Icon_TooltipOpen : ''
														}`}
														onClick={() => setTooltipVisible2(true)}
													>
														<path
															d='M8.22766 9C8.77678 7.83481 10.2584 7 12.0001 7C14.2092 7 16.0001 8.34315 16.0001 10C16.0001 11.3994 14.7224 12.5751 12.9943 12.9066C12.4519 13.0106 12.0001 13.4477 12.0001 14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
															stroke='white'
															strokeOpacity='0.7'
															strokeWidth='1.5'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<WidgetTooltip
														title='Apostil Fee'
														tooltipVisible={tooltipVisible2}
														onClick={() => setTooltipVisible2(false)}
													>
														<li>
															Verification as a true copy and Apostille executed
															in Israel
														</li>
														<li>
															Processing estimated time: up to 5 working days
														</li>
													</WidgetTooltip>
												</div>
											</div>
										</div>

										{/* row 4 */}
										<div className={s.Table_Body_Row}>
											<div className={s.Column}>
												<BaseCheckbox
													type='green'
													checked={isChecked2}
													onChange={() => setIsChecked2(!isChecked2)}
													className={s.Form_Checkbox}
												>
													Translation
												</BaseCheckbox>
											</div>

											<div className={s.Column}>
												<div className={s.Price}>
													<span>20.00</span>&nbsp;EUR/page
												</div>
											</div>

											<div className={s.Column}>
												<div className={s.Tooltip}>
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
														className={`${s.Tooltip_Icon} ${
															tooltipVisible3 ? s.Tooltip_Icon_TooltipOpen : ''
														}`}
														onClick={() => setTooltipVisible3(true)}
													>
														<path
															d='M8.22766 9C8.77678 7.83481 10.2584 7 12.0001 7C14.2092 7 16.0001 8.34315 16.0001 10C16.0001 11.3994 14.7224 12.5751 12.9943 12.9066C12.4519 13.0106 12.0001 13.4477 12.0001 14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
															stroke='white'
															strokeOpacity='0.7'
															strokeWidth='1.5'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<WidgetTooltip
														title='Translation'
														tooltipVisible={tooltipVisible3}
														onClick={() => setTooltipVisible3(false)}
													>
														<li>
															This is the price for a translation into English
															from: Russian, Latvian, Estonian, Lithuanian,
															Ukrainian, German, Polish, Spanish, French
															languages. Other combinations – on request
														</li>
													</WidgetTooltip>
												</div>
											</div>
										</div>

										{/* row 5 */}
										<div className={s.Table_Body_Row}>
											<div className={s.Column}>
												<BaseCheckbox
													type='green'
													checked={isChecked3}
													onChange={() => setIsChecked3(!isChecked3)}
													className={s.Form_Checkbox}
												>
													International Delivery
												</BaseCheckbox>
											</div>

											<div className={s.Column}>
												<div className={s.Price}>
													<span>19000.00</span>&nbsp;EUR/page
												</div>
											</div>

											<div className={s.Column}>
												<div className={s.Tooltip}>
													<svg
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'
														xmlns='http://www.w3.org/2000/svg'
														className={`${s.Tooltip_Icon} ${
															tooltipVisible4 ? s.Tooltip_Icon_TooltipOpen : ''
														}`}
														onClick={() => setTooltipVisible4(true)}
													>
														<path
															d='M8.22766 9C8.77678 7.83481 10.2584 7 12.0001 7C14.2092 7 16.0001 8.34315 16.0001 10C16.0001 11.3994 14.7224 12.5751 12.9943 12.9066C12.4519 13.0106 12.0001 13.4477 12.0001 14M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
															stroke='white'
															strokeOpacity='0.7'
															strokeWidth='1.5'
															strokeLinecap='round'
															strokeLinejoin='round'
														/>
													</svg>

													<WidgetTooltip
														title='International Delivery'
														tooltipVisible={tooltipVisible4}
														onClick={() => setTooltipVisible4(false)}
														markers={['GO', 'SU', 'e']}
													>
														<li>Language: English and Local (Dari/Pashto)</li>
														<li>No hard copy of a document</li>
														<li>
															Contains general company information including
															details about director and officers of the company
														</li>
														<li>
															Please note that some companies haven’t got the
															names of the director and officers in English
														</li>
														<li>Up to 3 working days</li>
													</WidgetTooltip>
												</div>
											</div>
										</div>
									</div>

									<div className={s.Table_Footer}>
										<div className={s.Table_Footer_Label}>Total</div>
										<div className={s.Table_Footer_Label}>
											<span className={s.Price}>190.00</span>&nbsp;EUR
										</div>
									</div>
								</div>

								<div className={s.Notes}>
									<div className={s.Notes_Item}>
										<div className={s.Notes_Item_Label}>G</div>
										<p className={s.Notes_Item_Description}>
											Contains general information about company - company name,
											number and sometimes registered address.
										</p>
									</div>

									<div className={s.Notes_Item}>
										<div className={s.Notes_Item_Label}>O</div>
										<p className={s.Notes_Item_Description}>
											Contains information about Directors and other officers of
											the company.
										</p>
									</div>

									<div className={s.Notes_Item}>
										<div className={s.Notes_Item_Label}>S</div>
										<p className={s.Notes_Item_Description}>
											Contains Shareholders Information.
										</p>
									</div>

									<div className={s.Notes_Item}>
										<div className={s.Notes_Item_Label}>U</div>
										<p className={s.Notes_Item_Description}>
											Contains information anout UBO.
										</p>
									</div>

									<div className={s.Notes_Item}>
										<div className={s.Notes_Item_Label}>E</div>
										<p className={s.Notes_Item_Description}>
											Electronic copy of document. Apostille may be not
											available for this kind of documents.
										</p>
									</div>

									<div className={s.Notes_Item}>
										<div className={s.Notes_Item_Label}>H</div>
										<p className={s.Notes_Item_Description}>
											Hard copy of documents available. Delivery must be added
											for this kind document.
										</p>
									</div>
								</div>
							</div>
						</div>
					</BaseContainer>
				</div>
			</div>
			<WidgetPopup popup={popup} onClick={() => setPopup(false)} />
		</>
	);
};

export default Widget;
