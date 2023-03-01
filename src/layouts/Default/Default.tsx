import { Footer } from 'components/landing/footer';
import { Navbar } from 'components/landing/navbar';
import React, { useEffect, useState } from 'react';
import styles from './Default.module.scss';

interface Props {
	children: JSX.Element;
}

const Default: React.FC<Props> = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);
	// const scrollBlockRef = React.useRef<HTMLDivElement>(null);

	// console.log('isVisible: ', isVisible);

	// const scrollFunction = () => {
	// 	const scrollTop = scrollBlockRef.current?.scrollTop;

	// 	if (scrollTop && scrollTop > 100) {
	// 		setIsVisible(true);
	// 		console.log('lol');
	// 	} else {
	// 		setIsVisible(false);
	// 		console.log('kek');
	// 	}
	// };

	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};

		if (scrollTop && scrollTop > 180) {
			setIsVisible(true);
			console.log('lol');
		} else {
			setIsVisible(false);
			console.log('kek');
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollTop]);

	return (
		<div
			className={styles.Wrapper}
			// ref={scrollBlockRef}
			// onScroll={scrollFunction}
		>
			<Navbar fixed={isVisible} />

			<div className={styles.Content}>{children}</div>

			<Footer />
		</div>
	);
};

export default Default;
