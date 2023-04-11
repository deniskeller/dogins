import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React, { useState } from 'react';
import s from './WidgetSelect.module.scss';

interface Props {
	label?: string;
	type?: string;
	className?: string;
	initialValue?: string;
	error?: string | boolean;
	disabled?: boolean;
	options: ISelectItem[];
	onChange: (value: string) => void;
}

interface ISelectItem {
	value: string;
	label: string;
}

const WidgetSelect: React.FC<Props> = ({
	label,
	className,
	initialValue,
	type = 'default',
	options,
	error,
	disabled = false,
	onChange,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(initialValue);
	const selectContainerRef = React.useRef(null);

	const clickOutsideHandler = () => setIsOpen(false);
	useOnClickOutside(selectContainerRef, clickOutsideHandler);

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value: string) => () => {
		const item = options.filter((item) => {
			return item.value == value;
		})[0].label;
		setSelectedOption(item);
		setIsOpen(false);
		onChange(item);
	};

	return (
		<div
			className={`${s.SelectContainer} ${s['Select_' + type]} ${className} ${
				error ? s.SelectError : ''
			} `}
			ref={selectContainerRef}
		>
			<div
				className={`${s.SelectHeader}  ${isOpen ? s.SelectHeaderFocus : ''} ${
					error ? s.Error : ''
				} ${disabled ? s.Disabled : ''}`}
				onClick={toggling}
			>
				<p
					className={`${selectedOption ? s.NotEmpty : ''}`}
					style={{
						position: label ? 'absolute' : 'static',
						color: error ? '#dc4945' : '#ffffff',
					}}
				>
					{selectedOption}
				</p>

				<BaseIcon
					icon={ALL_ICONS.SELECT_CHEVRON}
					viewBox='0 0 24 24'
					className={`${s.IconArrow} ${isOpen ? s.IconArrowActive : null}`}
				/>
			</div>

			{label ? (
				<label
					className={`${s.Label} ${
						(!isOpen && selectedOption) || selectedOption ? s.Label_Focus : ''
					}`}
					style={{
						color: error ? '#dc4945' : 'rgba(255, 255, 255, 0.7)',
					}}
				>
					{label}
				</label>
			) : null}

			{error ? <div className={s.ErrorText}>{error}</div> : ''}

			{isOpen && (
				<ul className={s.SelectList}>
					{options.map((option: ISelectItem) => (
						<li
							className={`${s.ListItem} ${
								selectedOption === option.label ? s.ListItem_Active : ''
							}`}
							onClick={onOptionClicked(option.value)}
							key={option.value}
						>
							<span className={s.ListItemTitle}>{option.label}</span>

							{selectedOption === option.label ? (
								<BaseIcon
									icon={ALL_ICONS.CHECK}
									viewBox='0 0 30 30'
									className={s.IconCheck}
								/>
							) : null}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default WidgetSelect;
