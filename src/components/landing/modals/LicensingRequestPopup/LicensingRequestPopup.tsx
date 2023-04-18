import { BaseButton, BaseIcon, BaseInput, BasePopup } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React, { useState } from 'react';
import s from './LicensingRequestPopup.module.scss';

interface Props {
	className?: string;
	popup: boolean;
	onClick: (popup: boolean) => void;
}

interface IValue {
	name: string;
	email: string;
}

const LicensingRequestPopup: React.FC<Props> = ({
	className = '',
	popup,
	onClick,
}) => {
	const [value, setValue] = React.useState<IValue>({
		name: '',
		email: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [submit, setSubmit] = useState(false);

	return (
		<BasePopup className={className} popup={popup} onClick={onClick}>
			<div className={s.LicensingRequestPopup}>
				<BaseIcon
					icon={ALL_ICONS.LOGO}
					viewBox='0 0 280 316'
					className={`${s.Logo} ${submit ? s.Logo_Submit : ''}`}
				/>

				<div className={s.Title}>
					<h1>Request assistance</h1>
				</div>

				{!submit ? (
					<div className={s.LicensingRequestPopup_Form}>
						<div className={s.LicensingRequestPopup_Form_Subtitle}>
							<span>Fill the form below and we'll reach you in 24 hours!</span>
						</div>

						<div className={s.LicensingRequestPopup_Form_Title}>
							<span>Personal info</span>
						</div>

						<BaseInput
							name='name'
							label='Your name'
							value={value.name}
							onChange={(val: string) => setNewValue(val, 'name')}
							className={s.LicensingRequestPopup_Form_Input}
						/>

						<BaseInput
							name='email'
							label='Email'
							value={value.email}
							onChange={(val: string) => setNewValue(val, 'email')}
							className={s.LicensingRequestPopup_Form_Input}
						/>

						<BaseButton
							title='Request'
							className={s.LicensingRequestPopup_Form_Button}
							onClick={() => setSubmit(true)}
						/>
					</div>
				) : (
					<div className={s.LicensingRequestPopup_Submit}>
						<svg
							width='80'
							height='55'
							viewBox='0 0 80 55'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={s.LicensingRequestPopup_Submit_Icon}
						>
							<path
								d='M2.1875 27.625L27.1875 52.625L77.8125 2'
								stroke='#B49635'
								strokeWidth='4'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>

						<div className={s.LicensingRequestPopup_Submit_Title}>
							<span>Thank you!</span>
						</div>
						<div className={s.LicensingRequestPopup_Submit_Subtitle}>
							<span>We'll reach you in 24 hours</span>
						</div>
					</div>
				)}
			</div>
		</BasePopup>
	);
};

export default LicensingRequestPopup;
