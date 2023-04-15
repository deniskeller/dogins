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

			<div className={s.CreateOrderPopup_Header}>
				<div className={s.Accordion}>
					<div className={s.Accordion_Header} onClick={() => setOpen(!open)}>
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
								<div className={s.Order_Header_Label}>Total Cost - AEMI</div>

								<div className={s.Order_Header_Value}>£ 1, 061,000</div>
								<BaseIcon
									viewBox='0 0 24 24'
									icon={ALL_ICONS.DELETE}
									className={s.Order_Header_DeleteOrder}
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
								<div className={s.Order_Header_Label}>Total Cost - SEMI</div>

								<div className={s.Order_Header_Value}>£ 1, 061,000</div>
								<BaseIcon
									viewBox='0 0 24 24'
									icon={ALL_ICONS.DELETE}
									className={s.Order_Header_DeleteOrder}
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
						{visible ? <div className={s.Accordion_Body_Gradient}></div> : null}
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
			/>
		</div>
	);
};

export default CreateOrderPopup;
