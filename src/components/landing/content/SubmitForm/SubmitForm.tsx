import React from 'react';
import s from './SubmitForm.module.scss';

interface Props {
	className?: string;
	borderColor?: string;
	iconColor?: string;
	titleColor?: string;
	subtitleColor?: string;
}

const SubmitForm: React.FC<Props> = ({
	className = '',
	borderColor = '#B49635',
	iconColor = '#B49635',
	titleColor = '#FFFFFF',
	subtitleColor = '#FFFFFF',
}) => {
	return (
		<div
			className={`${s.SubmitForm} ${className}`}
			style={{ borderColor: borderColor }}
		>
			<svg
				width='80'
				height='55'
				viewBox='0 0 80 55'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={s.SubmitForm_Icon}
			>
				<path
					d='M2.1875 27.625L27.1875 52.625L77.8125 2'
					stroke={iconColor}
					strokeWidth='4'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>

			<div className={s.SubmitForm_Title}>
				<span style={{ color: titleColor }}>Thank you!</span>
			</div>

			<div className={s.SubmitForm_Subtitle}>
				<span style={{ color: subtitleColor }}>
					We'll reach you in 24 hours
				</span>
			</div>
		</div>
	);
};

export default SubmitForm;
