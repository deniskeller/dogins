import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Footer } from 'components/landing/footer';
import { CreateOrderPopup, QuickOrderPopup } from 'components/landing/modals';
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

	//ВРЕМЕННАЯ ЛОГИКА МОДАЛОК
	const [quickOrderPopup, setQuickOrderPopup] = useState(false);
	const [addOrderPopup, setAddOrderPopup] = useState(false);
	const [count, setCount] = useState(0);

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

	useEffect(() => {
		setTimeout(() => {
			setQuickOrderPopup(true);
			setCount(+1);
		}, 1000);
	}, [quickOrderPopup]);

	useEffect(() => {
		if (count === 1 && !quickOrderPopup) {
			setAddOrderPopup(true);
			setTimeout(() => {
				setQuickOrderPopup(false);
			}, 1000);
		}
	}, [count, quickOrderPopup]);

	return (
		<div
			className={s.Wrapper}
			style={{ background: type == 'white' ? '#F0F0F0' : 'transparent' }}
		>
			<Navbar fixed={isVisible} type='white' pricing='pricing' />

			<div className={s.Content}>{children}</div>

			<BaseIcon
				icon={ALL_ICONS.LOGO}
				viewBox='0 0 280 316'
				className={s.PricingIcon}
			/>

			<Footer type={type} pricing='pricing' />

			<QuickOrderPopup popup={quickOrderPopup} onClick={setQuickOrderPopup} />

			<CreateOrderPopup popup={addOrderPopup} />
		</div>
	);
};

export default Pricing;
