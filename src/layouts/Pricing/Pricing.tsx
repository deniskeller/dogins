import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Footer } from 'components/landing/footer';
import { Navbar } from 'components/landing/navbar';
import React, { useEffect, useState } from 'react';
import s from './Pricing.module.scss';

interface Props {
	children: JSX.Element;
	type?: string;
}

const Pricing: React.FC<Props> = ({ children, type }) => {
	const [isVisible, setIsVisible] = useState(false);

	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};

		if (scrollTop && scrollTop > 100) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollTop]);

	return (
		<div
			className={s.Wrapper}
			style={{ background: type == 'white' ? '#ffffff' : 'transparent' }}
		>
			<Navbar fixed={isVisible} />

			<div className={s.Content}>{children}</div>

			<BaseIcon
				icon={ALL_ICONS.LOGO}
				viewBox='0 0 313 353'
				className={s.PricingIcon}
			/>

			<Footer type={type} />
		</div>
	);
};

export default Pricing;
