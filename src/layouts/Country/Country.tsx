import { Footer } from 'components/landing/footer';
import { Navbar } from 'components/landing/navbar';
import React, { useEffect, useState } from 'react';
import s from './Country.module.scss';

interface Props {
	children: JSX.Element;
	type?: string;
}

const Country: React.FC<Props> = ({ children, type }) => {
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
		<div className={s.Wrapper}>
			<Navbar fixed={isVisible} />

			<div className={s.Content}>{children}</div>

			<Footer type={type} className={s.Footer} />
		</div>
	);
};

export default Country;
