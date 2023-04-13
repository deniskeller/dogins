import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Logo.module.scss';

interface Props {
	className?: string;
	type?: string;
	pricing?: string;
}

const Logo: React.FC<Props> = ({ className = '', type, pricing }) => {
	const router = useRouter();

	return (
		<div
			className={`${s.Logo} ${className} ${
				(type == 'white' &&
					router.pathname.split('/')[1] !== 'pricing-information') ||
				pricing
					? s.Logo_Withe
					: ''
			}`}
		>
			<Link href='/'>
				<a>
					<BaseIcon icon={ALL_ICONS.LOGO_TEXT} viewBox='0 0 207 34' />
				</a>
			</Link>
		</div>
	);
};

export default Logo;
