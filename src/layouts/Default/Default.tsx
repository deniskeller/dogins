import { Footer } from 'components/landing/footer';
import { Navbar } from 'components/landing/navbar';
import React, { useEffect, useState } from 'react';
import styles from './Default.module.scss';

interface Props {
	children: JSX.Element;
	type?: string;
}

const Default: React.FC<Props> = ({ children, type }) => {
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
			className={styles.Wrapper}
			style={{ background: type == 'white' ? '#F0F0F0' : 'transparent' }}
		>
			<Navbar fixed={isVisible} type={type} />

			<div className={styles.Content}>{children}</div>

			<Footer type={type} />
		</div>
	);
};

export default Default;
