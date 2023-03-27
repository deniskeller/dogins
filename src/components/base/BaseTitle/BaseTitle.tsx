import React, { ReactNode } from 'react';
import s from './BaseTitle.module.scss';

interface Props {
	children?: ReactNode;
	type?: string;
	className?: string;
	color?: string;
}

const BaseTitle: React.FC<Props> = ({
	children,
	type = 'h1',
	className = '',
	color = '#ffffff',
}) => {
	if (type == 'h1') {
		return (
			<div className={`${className}`}>
				<h1
					className={`${s.Title} ${s['Title_' + type]}`}
					style={{ color: color }}
				>
					{children}
				</h1>
			</div>
		);
	} else if (type == 'h2') {
		return (
			<div className={`${className}`}>
				<h2
					className={`${s.Title} ${s['Title_' + type]}`}
					style={{ color: color }}
				>
					{children}
				</h2>
			</div>
		);
	} else if (type == 'app') {
		return (
			<div className={`${className}`}>
				<h2
					className={`${s.Title} ${s['Title_' + type]}`}
					style={{ color: color }}
				>
					{children}
				</h2>
			</div>
		);
	} else {
		return null;
	}
};

export default BaseTitle;
