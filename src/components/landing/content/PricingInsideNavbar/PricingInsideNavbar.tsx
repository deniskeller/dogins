import Link from 'next/link';
import React from 'react';
import s from './PricingInsideNavbar.module.scss';

type Props = {
	label_prev_link?: string;
	label_next_link?: string;
	prev_link?: string;
	next_link?: string;
	className?: string;
};

const PricingInsideNavbar: React.FC<Props> = ({
	className,
	label_prev_link,
	label_next_link,
	prev_link,
	next_link,
}) => {
	return (
		<>
			<div className={`${s.PricingInsideNavbar} ${className}`}>
				<Link href={`/${prev_link}`}>
					<a className={s.NavbarItem}>
						<svg
							width='37'
							height='37'
							viewBox='0 0 37 37'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={s.NavbarItem_Icon}
						>
							<path
								d='M29.2923 21.5833L18.5007 32.375M18.5007 32.375L7.70898 21.5833M18.5007 32.375L18.5007 4.625'
								stroke='white'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<div className={s.NavbarItem_Label}>{label_prev_link}</div>
					</a>
				</Link>

				<Link href={`/${next_link}`}>
					<a className={s.NavbarItem}>
						<div className={s.NavbarItem_Label}>{label_next_link}</div>
						<svg
							width='37'
							height='37'
							viewBox='0 0 37 37'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={s.NavbarItem_Icon}
						>
							<path
								d='M29.2923 21.5833L18.5007 32.375M18.5007 32.375L7.70898 21.5833M18.5007 32.375L18.5007 4.625'
								stroke='white'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</a>
				</Link>
			</div>
		</>
	);
};

export default PricingInsideNavbar;
