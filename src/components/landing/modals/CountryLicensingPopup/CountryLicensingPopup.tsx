import { BaseButton, BasePopup } from '@base/index';
import React from 'react';
import s from './CountryLicensingPopup.module.scss';

interface Props {
	className?: string;
	country: string;
	popup: boolean;
	onClick: (popup: boolean) => void;
}

const CountryLicensingPopup: React.FC<Props> = ({
	className = '',
	popup,
	country,
	onClick,
}) => {
	return (
		<BasePopup className={className} popup={popup} onClick={onClick}>
			<div className={s.CountryPopup}>
				<span>{country}</span>
				<BaseButton title='Request' className={s.WidgetPopup_Button} />
			</div>
		</BasePopup>
	);
};

export default CountryLicensingPopup;
