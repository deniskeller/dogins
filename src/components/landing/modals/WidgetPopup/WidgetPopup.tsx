import { BaseButton, BasePopup, BaseTitle } from '@base/index';
import React from 'react';
import s from './WidgetPopup.module.scss';

interface Props {
	className?: string;
	popup: boolean;
	onClick: (popup: boolean) => void;
}

const WidgetPopup: React.FC<Props> = ({ className = '', popup, onClick }) => {
	return (
		<BasePopup className={className} popup={popup} onClick={onClick}>
			<div className={s.Header} onClick={() => onClick(false)}>
				<BaseTitle type='app'>Принять проект?</BaseTitle>
			</div>

			<div className={s.Description}>
				<p>Проект будет опубликован на витрине и доступен пользователям</p>
			</div>

			<BaseButton title='Принять' type='blue' className={s.Actions_Button} />
		</BasePopup>
	);
};

export default WidgetPopup;
