import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import { BaseIcon } from '..';
import s from './BaseButton.module.scss';

interface Props {
	title?: string;
	type?: string;
	disabled?: boolean;
	className?: string;
	style?: object;
	onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButton: React.FC<Props> = ({
	title = '',
	type = 'empty',
	disabled = false,
	className = '',
	style,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${className} ${s.Button} ${s['Button_' + type]}`}
			style={style}
		>
			<div className={s.Title}>{title}</div>

			{type == 'submit' ? (
				<BaseIcon
					icon={ALL_ICONS.ARROW}
					viewBox='0 0 44 24'
					className={s.IconSubmit}
				/>
			) : null}
		</button>
	);
};

export default BaseButton;
