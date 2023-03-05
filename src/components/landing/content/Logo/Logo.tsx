import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import React from 'react';
import s from './Logo.module.scss';

interface Props {
	className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
	return (
		<div className={`${s.Logo} ${className}`}>
			<Link href='/'>
				<BaseIcon icon={ALL_ICONS.LOGO_TEXT} viewBox='0 0 207 34' />
			</Link>
		</div>
	);
};

export default Logo;
