import React, { useEffect, useRef, useState } from 'react';
import s from './BaseTextarea.module.scss';

interface Props {
	type?: string;
	name?: string;
	label?: string;
	placeholder?: string;
	required?: boolean;
	className?: string;
	error?: string | boolean;
	value: string;
	maxLength?: number;
	onChange(value: string): void;
}

const BaseTextarea: React.FC<Props> = ({
	value,
	label,
	error,
	name,
	required,
	placeholder,
	className = '',
	maxLength,
	onChange,
}) => {
	const [focus, setFocus] = useState(false);
	const refTextarea = useRef<HTMLTextAreaElement | null>(null);

	useEffect(() => {
		console.log(
			'refTextarea: ',
			refTextarea.current?.offsetParent?.clientHeight
		);
		console.log('refTextarea: ', refTextarea);
	}, []);

	return (
		<div className={`${s.BaseTextarea} ${className}`}>
			<div
				className={`${s.Textarea} ${error ? s.Error : ''} ${
					focus ? s.Focus : ''
				} `}
				onClick={() => refTextarea.current?.focus()}
				style={{
					height: refTextarea.current?.scrollHeight + 'px',
					minHeight: '50px',
				}}
			>
				<textarea
					ref={refTextarea}
					value={value}
					name={name}
					maxLength={maxLength}
					placeholder={placeholder}
					required={required}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						onChange(e.target.value)
					}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					className={`${s.Textarea_Input}`}
				/>
			</div>

			{label ? (
				<label
					className={`${s.Label} ${value || focus ? s.NoEmpty : ''} ${
						s.Label_Default
					}`}
				>
					{label}
				</label>
			) : null}

			{error ? (
				<div className={s.ErrorText}>
					<span>{error}</span>
				</div>
			) : null}
		</div>
	);
};
export default BaseTextarea;
