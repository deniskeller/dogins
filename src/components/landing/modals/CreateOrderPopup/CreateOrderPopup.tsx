import { BaseButton, BaseIcon, BaseInput } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { PhoneInput } from '@content/landing/index';
import React, { useRef, useState } from 'react';
import s from './CreateOrderPopup.module.scss';

interface Props {
	popup: boolean;
	onClick: (popup: boolean) => void;
}

interface IFormValue {
	first_name: string;
	last_name: string;
	phone: string;
	email: string;
}

const CreateOrderPopup: React.FC<Props> = ({ popup = false, onClick }) => {
	const [open, setOpen] = useState(false);

	const refBody = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(true);

	const scrollFunction = () => {
		const scrollTop = refBody.current?.scrollTop;

		if (
			scrollTop &&
			scrollTop == refBody.current?.scrollHeight - refBody.current?.clientHeight
		) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	};

	const [value, setValue] = React.useState<IFormValue>({
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [visibleFormOrder, setVisibleFormOrder] = useState(true);
	const [clearFormOrder, setClearFormOrder] = useState(false);

	const submitHandler = () => {
		setVisibleFormOrder(false);
	};

	return (
		<div
			className={`${s.CreateOrderPopup} ${
				popup ? s.CreateOrderPopup_Visible : ''
			}`}
		>
			<BaseIcon
				viewBox='0 0 24 24'
				icon={ALL_ICONS.CLOSE}
				className={s.CreateOrderPopup_Close}
				onClick={() => onClick(false)}
			/>

			{visibleFormOrder && !clearFormOrder ? (
				<>
					<div className={s.CreateOrderPopup_Header}>
						<div className={s.Accordion}>
							<div
								className={s.Accordion_Header}
								onClick={() => setOpen(!open)}
							>
								<div className={s.Accordion_Header_Title}>
									<span>Fast order&nbsp;-&nbsp;</span>
								</div>

								<ul className={s.Accordion_Header_Orders}>
									<li>
										AEMI<span>,</span>
									</li>
									&nbsp;
									<li>SEMI</li>
								</ul>

								<BaseIcon
									icon={ALL_ICONS.CHEVERON}
									viewBox='0 0 30 30'
									className={`${s.Accordion_Header_IconCheveron} ${
										open ? s.Accordion_Header_IconCheveron_Open : ''
									}`}
								/>
							</div>

							<div
								className={`${s.Accordion_Body} ${
									open ? s.Accordion_Body_Open : ''
								}`}
								ref={refBody}
								onScroll={scrollFunction}
							>
								<div className={s.Order}>
									<div className={s.Order_Header}>
										<div className={s.Order_Header_Label}>
											Total Cost - AEMI
										</div>

										<div className={s.Order_Header_Value}>£ 1, 061,000</div>
										<BaseIcon
											viewBox='0 0 24 24'
											icon={ALL_ICONS.DELETE}
											className={s.Order_Header_DeleteOrder}
											onClick={() => setClearFormOrder(true)}
										/>
									</div>

									<ul className={s.Order_Body}>
										<li className={s.SoftwareItem}>
											<div className={s.SoftwareItem_Label}>
												<span>Requirements to the authorised capital</span>
											</div>
											<div className={s.SoftwareItem_Price}>£ 305,000</div>
										</li>

										<li className={s.SoftwareItem}>
											<div className={s.SoftwareItem_Label}>
												<span>
													Commission in the FCA treasury for a financial company
												</span>
											</div>
											<div className={s.SoftwareItem_Price}>£ 6,000</div>
										</li>

										<li className={s.SoftwareItem}>
											<div className={s.SoftwareItem_Label}>
												<span>
													Cost of preparation of documents and infrastructure
												</span>
											</div>
											<div className={s.SoftwareItem_Price}>£ 750,000</div>
										</li>
									</ul>
								</div>

								<div className={s.Order}>
									<div className={s.Order_Header}>
										<div className={s.Order_Header_Label}>
											Total Cost - SEMI
										</div>

										<div className={s.Order_Header_Value}>£ 1, 061,000</div>
										<BaseIcon
											viewBox='0 0 24 24'
											icon={ALL_ICONS.DELETE}
											className={s.Order_Header_DeleteOrder}
											onClick={() => setClearFormOrder(true)}
										/>
									</div>

									<ul className={s.Order_Body}>
										<li className={s.SoftwareItem}>
											<div className={s.SoftwareItem_Label}>
												<span>Requirements to the authorised capital</span>
											</div>
											<div className={s.SoftwareItem_Price}>£ 305,000</div>
										</li>

										<li className={s.SoftwareItem}>
											<div className={s.SoftwareItem_Label}>
												<span>
													Commission in the FCA treasury for a financial company
												</span>
											</div>
											<div className={s.SoftwareItem_Price}>£ 6,000</div>
										</li>

										<li className={s.SoftwareItem}>
											<div className={s.SoftwareItem_Label}>
												<span>
													Cost of preparation of documents and infrastructure
												</span>
											</div>
											<div className={s.SoftwareItem_Price}>£ 750,000</div>
										</li>
									</ul>
								</div>
								{/* градиент */}
								{visible ? (
									<div className={s.Accordion_Body_Gradient}></div>
								) : null}
							</div>
						</div>
					</div>

					<div className={s.Border}></div>

					<div className={s.CreateOrderPopup_Subtitle}>
						<span>Please, fill form below in to place an order</span>
					</div>

					<div className={s.CreateOrderPopup_Form}>
						<BaseInput
							name='first_name'
							label='First name'
							value={value.first_name}
							onChange={(val: string) => setNewValue(val, 'first_name')}
						/>

						<BaseInput
							name='last_name'
							label='Last name'
							value={value.last_name}
							onChange={(val: string) => setNewValue(val, 'last_name')}
						/>

						<PhoneInput
							value={value.phone}
							onChange={(val: string) => setNewValue(val, 'phone')}
						/>

						<BaseInput
							name='email'
							label='Email'
							value={value.email}
							onChange={(val: string) => setNewValue(val, 'email')}
						/>
					</div>

					<BaseButton
						title='Submit'
						type='white'
						className={s.CreateOrderPopup_Button}
						onClick={() => submitHandler()}
					/>
				</>
			) : null}

			{!visibleFormOrder ? (
				<>
					<div className={s.Submit}>
						<div className={s.Title}>
							<span>Thank you!</span>
						</div>

						<div className={s.Border}></div>

						<div className={s.Subtitle}>
							<span>
								The invoice has been sent to the email address you provided.
							</span>
						</div>

						<BaseButton
							title='Back'
							className={s.Button}
							onClick={() => setVisibleFormOrder(true)}
						/>
					</div>
				</>
			) : null}

			{clearFormOrder ? (
				<div className={s.ClearOrders}>
					<div className={s.Title}>
						<span>fast order</span>
					</div>

					<div className={s.Border}></div>

					<div className={s.Subtitle}>
						<span>Your order cart is empty</span>
					</div>

					<svg
						width='180'
						height='180'
						viewBox='0 0 180 180'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={s.Icon}
					>
						<path
							d='M67.8672 117.728V117.73C70.117 117.73 146.878 91.5974 156.124 38.5934C158.181 39.506 161.992 36.9267 163.501 38.5948C165.47 34.6808 160.785 47.5 160.785 47.5C160.785 47.5 159.225 53.7589 159.001 55.9976L149.501 91C149.104 94.9736 146.501 101 145.001 108C143.001 111.5 142.001 117 142.001 117.728H67.8672Z'
							fill='white'
							fillOpacity='0.1'
						/>
						<circle
							cx='126.749'
							cy='143.045'
							r='14.9517'
							stroke='white'
							strokeWidth='2'
						/>
						<circle
							cx='75.7037'
							cy='143.045'
							r='14.9517'
							stroke='white'
							strokeWidth='2'
						/>
						<path
							d='M38.5578 37.2073L32.0359 11.0952C31.5997 9.35406 30.5942 7.80855 29.1791 6.70421C27.7641 5.59988 26.0206 5.00005 24.2256 5H14.4023'
							stroke='white'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M61.7556 117L39.3235 38H163.692L142.235 117H61.7556Z'
							stroke='white'
							strokeWidth='2'
						/>
					</svg>

					<BaseButton title='Back to pricing' className={s.Button} />
				</div>
			) : null}
		</div>
	);
};

export default CreateOrderPopup;
