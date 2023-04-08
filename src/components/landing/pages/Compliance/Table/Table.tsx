import { BaseButton, BaseContainer } from '@base/index';
import React, { useRef, useState } from 'react';
import s from './Table.module.scss';

type Props = {};

const Table: React.FC<Props> = () => {
	const refTable = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(true);

	const scrollFunction = () => {
		const scrollTop = refTable.current?.scrollTop;
		if (scrollTop && scrollTop == refTable.current?.scrollHeight - 990) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	};

	return (
		<>
			<div className='Wrapper-l'>
				<BaseContainer className={s.BaseContainer}>
					<div className={s.Table}>
						<div
							className={s.Table_Content}
							ref={refTable}
							onScroll={scrollFunction}
						>
							<div className={`${s.Row} ${s.Row_Header}`}>
								<div className={`${s.Column} ${s.Column_Main}`}>
									<span>
										Subscription Plan (all prices are in EUR exluding VAT)
									</span>
								</div>

								<div className={`${s.Column} ${s.Column_Value}`}>
									<div className={s.Label}>
										<span>StartUp</span>
									</div>

									<div className={s.Price}>
										<span>€12.000</span>
									</div>

									<BaseButton
										title='Request'
										type='green'
										className={s.Button}
									/>
								</div>

								<div className={`${s.Column} ${s.Column_Value}`}>
									<div className={s.MostSelected}>
										<span>Most selected</span>
									</div>

									<div className={s.Label}>
										<span>Basic</span>
									</div>

									<div className={s.Price}>
										<span>€15.000</span>
									</div>

									<BaseButton
										title='Request'
										type='green'
										className={s.Button}
									/>
								</div>

								<div className={`${s.Column} ${s.Column_Value}`}>
									<div className={s.Label}>
										<span>Volume</span>
									</div>

									<div className={s.Price}>
										<span>€20.000</span>
									</div>

									<BaseButton
										title='Request'
										type='green'
										className={s.Button}
									/>
								</div>

								<div className={`${s.Column} ${s.Column_Value}`}>
									<div className={s.Label}>
										<span>Enterprise</span>
									</div>

									<div className={s.Price}>
										<span>€32.000</span>
									</div>

									<BaseButton
										title='Request'
										type='green'
										className={s.Button}
									/>
								</div>
							</div>

							<div className={s.FullWidth}>
								<span>KYC Individuals - Onboarding</span>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Automated Biometric ID Verification packages, EUR excl VAT,
										monthly
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>0</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>99</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>249</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>598</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Number of new successful verifications, year</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>N/A</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>400</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>1200</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>2400</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Additional successful verifications, EUR per entry
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>5</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>5</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>5</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>5</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Empty}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>
							</div>

							<div className={s.FullWidth}>
								<span>
									AML - Sanctions, PEP's, Watch Lists - Onboarding and
									Monitoring
								</span>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>AML Package, EUR excl VAT monthly 49</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>0</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>49</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>99</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>198</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Number of AML Checks, year 2400</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>N/A</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>2400</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>4800</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>9600</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Additional AML Check/Refresh or Pay As You Go 2.5</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>5</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>2.5</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>2.5</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>2.5</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Empty}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>
							</div>

							<div className={s.FullWidth}>
								<span>KYB - Legal Entities - Onboarding and Monitoring</span>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										KYB/KYC/AML back-office platform, EUR excl VAT, monthly 99
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>49</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>99</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>198</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>498</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Standart Online Client Onboarding Questionnaire v</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Online access to Government Registers (check/refresh per
										year)
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>180</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>1200</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>3600</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>12000</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Number of database entries (ind/corp), per year, total up to
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>360</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>3600</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>5000</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>20000</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Users</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>2</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>3</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>5</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>15</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>UBO discovery from goverment sources</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Integration: AML/PEP/Sanctions WatchLists (see AML section
										above)
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Integration: Request Documents from Government Registers
										(cost of documents is charged additionally)
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Integration: Certification of copies of personal and
										corporate documents with Notary Public/Apostil (cost is
										charged additionally)
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Integration with third parties AML/ID verification providers
										v
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Corporate ownership chart</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Monitoring validity of documents: Notifications of expired
										documents v
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>N/A</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Document storage</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>5 GB</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>15GB</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>30 GB</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>100 GB</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Secure access to data with additional encryption (VPN)
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>GDPR Compliant DataCentre</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Cloud White Label License monthly, EUR excl VAT</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>N/A</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>50</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>50</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										KYB reports with your logo, Your own domain (not includes
										the domain cost), Upload links on your domain
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>N/A</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>API Integration, monthly EUR excl VAT</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>N/A</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>v</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Custom Online Client Onboarding Questionnaire, monthly EUR
										excl VAT
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>N/A</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>50</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>50</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>50</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Development/set up of custom online forms (one time fee):
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>N/A</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>from 200 EUR</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>from 200 EUR</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>from 200 EUR</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Other services</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Manual Analysis and Enhanced Onboarding of corporate
										documents, input data, review report, Validation of the
										Chain of legal ownership from the date of the
										incorporationstarts, per entitiy, starts from
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Business Profile Analysis: High Risk Activity</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Detailed Media Analysis on Legal Entity and UBO</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Licensing and other legal requirements in the country of
										incorporation
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>Source of Wealth Investigation</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>By request</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Enhanced Onboarding of Individuals (non-standard documents:
										Cyrilic, Handwritten, etc.), per person, starts from
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>4</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>4</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>4</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>4</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Video Call for Identity Verification - Live interview
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>35</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Signature Verification, Certification of copies of personal
										and corporate documents by EU Licensed company
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>150</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>150</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>150</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>150</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Default}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span>
										Remote Certification of copies of personal and corporate
										documents with Notary Public / Apostille, starts from
									</span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>200</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>200</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>200</span>
									<div className={s.Border}></div>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span>200</span>
									<div className={s.Border}></div>
								</div>
							</div>

							<div className={`${s.Row} ${s.Row_Empty} ${s.Row_Last}`}>
								<div className={`${s.ColumnTitle} ${s.Column_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>

								<div className={`${s.ColumnValue} ${s.Column_Value_Default}`}>
									<span></span>
								</div>
							</div>

							{/* градиент */}
							{visible ? <div className={s.Table_Gradient}></div> : null}
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Table;
