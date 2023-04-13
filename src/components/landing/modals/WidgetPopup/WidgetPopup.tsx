import { BaseButton, BaseInput, BasePopup, BaseTextarea } from '@base/index';
import { PhoneInput } from '@content/landing/index';
import React from 'react';
import s from './WidgetPopup.module.scss';

interface Props {
	className?: string;
	popup: boolean;
	onClick: (popup: boolean) => void;
}

interface IValue {
	name: string;
	email: string;
	phone: string;
	address: string;
	message: string;
}

const WidgetPopup: React.FC<Props> = ({ className = '', popup, onClick }) => {
	const [value, setValue] = React.useState<IValue>({
		name: '',
		email: '',
		phone: '',
		address: '',
		message: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	return (
		<BasePopup className={className} popup={popup} onClick={onClick}>
			<div className={s.WidgetPopup}>
				<div className={s.WidgetPopup_Header}>
					<div
						className={s.WidgetPopup_Header_Title}
						onClick={() => onClick(false)}
					>
						<h1>Send Request</h1>
					</div>

					<div className={s.WidgetPopup_Header_Description}>
						<p>
							Pay now or send request for bank transfers and you will receive
							the link to Notary Appointments’ Calendar
						</p>
					</div>
				</div>

				<div className={s.WidgetPopup_Body}>
					<div className={s.WidgetPopup_Body_Table}>
						<div className={s.Row}>
							<div className={s.Row_Label}>Jurisdiction</div>
							<div className={s.Row_Value}>Afganistan</div>
						</div>

						<div className={s.Row}>
							<div className={s.Row_Label}>Company Name</div>
							<div className={s.Row_Value}>Esoque</div>
						</div>

						<div className={s.Row}>
							<div className={s.Row_Label}>
								Company search report (electronic)
							</div>
							<div className={s.Row_Value}>
								<span>0</span>&nbsp;EUR
							</div>
						</div>

						<div className={s.Row}>
							<div className={s.Row_Label}>Processing fee</div>
							<div className={s.Row_Value}>
								<span>15</span>&nbsp;EUR
							</div>
						</div>

						<div className={s.Row}>
							<div className={s.Row_Label}>Translation</div>
							<div className={s.Row_Value}>
								<span>25</span>&nbsp;EUR
							</div>
						</div>

						<div className={s.Total}>
							<div className={s.Total_Label}>Total</div>
							<div className={s.Total_Value}>
								<span>40</span>&nbsp;EUR
							</div>
						</div>
					</div>

					<div className={s.WidgetPopup_Body_Form}>
						<div className={s.Title}>
							<h3>Personal info</h3>
						</div>

						<div className={s.Form}>
							<BaseInput
								name='name'
								label='Your name'
								value={value.name}
								onChange={(val: string) => setNewValue(val, 'name')}
							/>

							<BaseInput
								name='email'
								label='Email'
								value={value.email}
								onChange={(val: string) => setNewValue(val, 'email')}
							/>

							<PhoneInput
								value={value.phone}
								onChange={(val: string) => setNewValue(val, 'phone')}
							/>

							<BaseInput
								name='address'
								label='Document delivery address'
								value={value.address}
								onChange={(val: string) => setNewValue(val, 'address')}
							/>

							<BaseTextarea
								name='message'
								label='Comment'
								type='text'
								value={value.message}
								onChange={(val: string) => setNewValue(val, 'message')}
							/>
						</div>
					</div>
				</div>

				<BaseButton title='Request' className={s.WidgetPopup_Button} />
			</div>
		</BasePopup>
	);
};

export default WidgetPopup;
