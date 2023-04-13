import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './NavbarLink.module.scss';

interface Props {
	href: string;
	title: string;
	className?: string;
	type?: string;
	index?: number;
	pricing?: string;
}

const NavbarLink: React.FC<Props> = ({
	href,
	title,
	className,
	index,
	type,
	pricing,
}) => {
	const router = useRouter();

	return (
		<li
			key={index}
			className={`${
				router.pathname.split('/')[1] === href.split('/')[1]
					? styles.Active
					: ''
			} ${styles.Link} ${className}`}
		>
			<Link href={href}>
				<a
					style={{
						color:
							type == 'white' &&
							router.pathname.split('/')[1] !== 'pricing-information'
								? '#121212'
								: router.pathname.split('/')[1] == 'pricing-information' &&
								  pricing
								? '#121212'
								: '#ffffff',
					}}
				>
					{title}
				</a>
			</Link>
		</li>
	);
};

export default NavbarLink;
