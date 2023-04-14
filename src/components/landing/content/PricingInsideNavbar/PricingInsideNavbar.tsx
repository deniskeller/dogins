import React from 'react';
import s from './PricingInsideNavbar.module.scss';

type Props = {
	prev_link?: string;
	next_link?: string;
	className?: string;
};

const PricingInsideNavbar: React.FC<Props> = ({
	className,
	prev_link,
	next_link,
}) => {
	return (
		<>
			<div className={`${s.PricingInsideNavbar} ${className}`}>
				<div className={s.NavbarItem}>
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
					<div className={s.NavbarItem_Label}>Support services</div>
				</div>

				<div className={s.NavbarItem}>
					<div className={s.NavbarItem_Label}>Compliance software</div>
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
				</div>
			</div>
		</>
	);
};

export default PricingInsideNavbar;
