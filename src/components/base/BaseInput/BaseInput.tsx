import React from 'react';
import s from './BaseInput.module.scss';

interface Props {
	type?: string;
	theme?: string;
	name: string;
	label?: string;
	min?: number;
	max?: number;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	autocomplete?: string;
	error?: string | boolean;
	value: string | number;
	onChange(value: string | number): void;
	onKeyDown?: React.KeyboardEventHandler;
}

const BaseInput: React.FC<Props> = ({
	value,
	label,
	type = 'text',
	theme = 'light',
	error,
	name,
	min,
	max,
	required = false,
	disabled = false,
	placeholder,
	className = '',
	autocomplete = 'off',
	onChange,
	onKeyDown,
}) => {
	return (
		<div className={`${s.BaseInput} ${className}`}>
			<input
				value={value}
				type={type}
				className={`${s.Input} ${error ? s.Error : ''} ${s['Input_' + theme]}`}
				name={name}
				min={min}
				max={max}
				placeholder={placeholder}
				required={required}
				autoComplete={autocomplete}
				disabled={disabled}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					onChange(e.target.value)
				}
				onKeyDown={onKeyDown}
			/>

			{label ? (
				<label
					className={`${s.Label} ${value ? s.NoEmpty : ''} ${
						s['Label_' + theme]
					}`}
				>
					{label}
				</label>
			) : null}

			{error ? <div className={s.ErrorText}>{error}</div> : ''}
		</div>
	);
};
export default BaseInput;
