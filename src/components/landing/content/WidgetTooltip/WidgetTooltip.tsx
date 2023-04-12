import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import s from './WidgetTooltip.module.scss';

interface IProps {
	children: ReactNode | ReactNode[];
	title: string;
	className?: string;
	tooltipVisible: boolean;
	markers?: string[];
	onClick: (e: React.SyntheticEvent) => void;
}

const WidgetTooltip: React.FC<IProps> = ({
	title,
	children,
	markers,
	tooltipVisible,
	onClick,
	className = '',
}) => {
	const computedBackground = (marker: string) => {
		if (marker == 'go') {
			return '#14422C';
		}
		if (marker == 'su') {
			return '#180D19';
		}
		if (marker == 'e') {
			return '#B49635';
		}
	};
	return (
		<>
			<div
				className={`${s.WidgetTooltip} ${className} ${
					!tooltipVisible ? s.WidgetTooltip_Hide : ''
				}`}
			>
				<div className={s.WidgetTooltip_Wrapper}>
					<BaseIcon
						viewBox='0 0 24 24'
						icon={ALL_ICONS.CLOSE}
						className={s.WidgetTooltip_Close}
						onClick={onClick}
					/>

					<div className={s.WidgetTooltip_Header}>
						<span>{title}</span>
					</div>

					{markers ? (
						<ul className={s.WidgetTooltip_Markers}>
							{markers?.map((item, index) => {
								return (
									<li
										key={index}
										style={{
											background: computedBackground(item.toLocaleLowerCase()),
										}}
									>
										<span>{item}</span>
									</li>
								);
							})}
						</ul>
					) : null}

					<ul className={s.WidgetTooltip_Body}>{children}</ul>
				</div>
			</div>
		</>
	);
};

export default WidgetTooltip;
