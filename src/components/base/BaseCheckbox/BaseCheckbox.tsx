import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import s from './BaseCheckbox.module.scss';

interface Props {
	id?: string;
	checked: boolean;
	disabled?: boolean;
	className?: string;
	type?: string;
	error?: string | boolean;
	children?: ReactNode;
	onChange: (e: React.FormEvent) => void;
}

const BaseCheckbox: React.FC<Props> = ({
	type = '',
	id = '',
	disabled = false,
	className,
	error,
	children,
	checked,
	onChange,
}) => {
	const handler = !disabled ? onChange : undefined;

	return (
		<span
			className={`${className} ${s.BaseCheckbox} ${s['BaseCheckbox_' + type]} ${
				disabled ? s.isDisabled : ''
			}`}
			onClick={handler}
		>
			<input
				id={id}
				checked={checked}
				type='checkbox'
				className={s.BaseCheckboxInput}
				disabled={disabled}
				onChange={handler}
			/>
			<span
				className={` ${s.BaseCheckboxCheck} ${checked ? s.isActive : ''} ${
					error && !checked ? s.isError : ''
				}`}
			>
				<BaseIcon
					icon={ALL_ICONS.CHECK}
					viewBox='0 0 30 30'
					className={s.BaseCheckboxTick}
				/>
			</span>
			{children ? (
				<div
					className={`${s.BaseCheckboxLabel} ${disabled ? s.isDisabled : ''}
      `}
				>
					<span>{children}</span>
				</div>
			) : null}
		</span>
	);
};

export default BaseCheckbox;
