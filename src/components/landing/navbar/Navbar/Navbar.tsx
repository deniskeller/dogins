import { BaseButton, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Logo } from '@content/landing/index';
import useOnClickOutside from '@hooks/useOnClickOutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import NavbarLink from '../NavbarLink/NavbarLink';
import s from './Navbar.module.scss';

interface Props {
	fixed?: boolean;
	type?: string;
	pricing?: string;
}

interface Links {
	[key: string]: string;
}

const links: Links[] = [
	{
		href: '/about-us',
		title: 'About Us',
	},
	{
		href: '/compliance',
		title: 'Compliance',
	},
	{
		href: '/licensing',
		title: 'Licensing',
	},
	{
		href: '/investments',
		title: 'Investments',
	},
	{
		href: '/pricing-information',
		title: 'Pricing',
	},
	{
		href: '/careers',
		title: 'Careers',
	},
	{
		href: '/eco',
		title: 'Eco',
	},
	{
		href: '/news-and-insights',
		title: 'News&Insights',
	},
	{
		href: '/contacts',
		title: 'Contacts',
	},
];

const Navbar: React.FC<Props> = ({ fixed, type, pricing }) => {
	const [visible, setVisible] = React.useState(false);
	const thisDrawer = React.useRef<HTMLDivElement>(null);
	const router = useRouter();

	const clickOutsideHandler = () => {
		setVisible(false);
	};
	useOnClickOutside(thisDrawer, clickOutsideHandler);

	useEffect(() => {
		//Закрываем меню по нажатию Esc
		function onKeyDown(event: any) {
			if (event.keyCode === 27) {
				setVisible(false);
			}
		}

		const documentWidth = document.documentElement.clientWidth;
		const windowsWidth = window.innerWidth;
		const scrollbarWidth = windowsWidth - documentWidth;

		if (visible) {
			document.body.style.overflow = 'hidden';
			document.body.style.height = '100%';
			// document.body.style.position = 'fixed';

			//добавляем ширину скрола
			document.body.style.paddingRight = scrollbarWidth + 'px';
			document.addEventListener('keydown', onKeyDown);
		}

		return () => {
			document.body.style.overflow = '';
			document.body.style.height = '';
			// document.body.style.position = 'relative';
			//убираем ширину скрола
			document.body.style.paddingRight = '0px';
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [visible]);

	return (
		<div
			className={`${s.Container} ${fixed ? s.Fixed : ''} ${
				fixed &&
				type == 'white' &&
				router.pathname.split('/')[1] !== 'pricing-information'
					? s.Fixed_White
					: ''
			} ${
				fixed &&
				type == 'white' &&
				router.pathname.split('/')[1] == 'pricing-information'
					? s.Fixed_Pricing
					: ''
			}`}
		>
			<div className={s.Navbar}>
				<Logo className={s.Navbar_Logo} type={type} />

				<ul className={`${s.Navbar_List} ${s.Desktop}`}>
					{links.map((link, index) => {
						return (
							<NavbarLink
								type={type}
								href={link.href}
								title={link.title}
								index={index}
								key={index}
								className={s.Navbar_List_Item}
							/>
						);
					})}
				</ul>

				<Link href='/sign-up'>
					<a
						className={`${s.Navbar_SignUp} ${s.Desktop}`}
						style={{
							color:
								type == 'white' &&
								router.pathname.split('/')[1] !== 'pricing-information'
									? '#121212'
									: '#ffffff',
						}}
					>
						Sign Up
					</a>
				</Link>

				<BaseButton
					title='Log in'
					className={`${s.Navbar_Login} ${s.Desktop} ${
						type == 'white' &&
						router.pathname.split('/')[1] !== 'pricing-information'
							? s.Navbar_Login_White
							: ''
					}`}
				/>
			</div>

			<div ref={thisDrawer} className={`${s.Drawer} ${s.Mobile}`}>
				<div
					className={`${s.Drawer_Burger} ${
						visible ? s.Drawer_Burger_Active : s.Drawer_Burger_NotActive
					}`}
					onClick={() => setVisible(!visible)}
				>
					<span
						style={{
							background:
								type == 'white' &&
								!visible &&
								router.pathname.split('/')[1] !== 'pricing-information'
									? '#121212'
									: visible &&
									  router.pathname.split('/')[1] == 'pricing-information'
									? 'rgba(26, 26, 26, 0.5)'
									: '#ffffff',
						}}
					></span>
					<span
						style={{
							background:
								type == 'white' &&
								!visible &&
								router.pathname.split('/')[1] !== 'pricing-information'
									? '#121212'
									: visible &&
									  router.pathname.split('/')[1] == 'pricing-information'
									? 'rgba(26, 26, 26, 0.5)'
									: '#ffffff',
						}}
					></span>
					<span
						style={{
							background:
								type == 'white' &&
								!visible &&
								router.pathname.split('/')[1] !== 'pricing-information'
									? '#121212'
									: visible &&
									  router.pathname.split('/')[1] == 'pricing-information'
									? 'rgba(26, 26, 26, 0.5)'
									: '#ffffff',
						}}
					></span>
				</div>

				<div
					className={`${s.Drawer_Navbar} ${
						visible ? s.Drawer_Navbar_Visible : ''
					}`}
					style={{
						background:
							type == 'white' &&
							router.pathname.split('/')[1] == 'pricing-information'
								? '#F0F0F0'
								: '#282828',
					}}
				>
					<div className={s.Drawer_Wrapper}>
						<ul className={s.Drawer_Navbar_List}>
							{links.map((link, index) => {
								return (
									<NavbarLink
										pricing={pricing}
										href={link.href}
										title={link.title}
										index={index}
										key={index}
										className={s.Drawer_Navbar_List_Item}
									/>
								);
							})}
						</ul>

						<BaseIcon
							icon={ALL_ICONS.LOGO}
							viewBox='0 0 280 316'
							className={`${s.Drawer_Navbar_Logo} ${
								pricing ? s.Drawer_Navbar_Logo_Pricing : ''
							}`}
						/>

						<div
							className={s.Drawer_Navbar_Actions}
							style={{
								borderColor: pricing
									? 'rgba(26, 26, 26, 0.05)'
									: 'rgba(255, 255, 255, 0.2)',
							}}
						>
							<Link href='/log_in'>
								<a
									className={s.Drawer_Navbar_Actions_SignUp}
									style={{
										color: pricing ? '#121212' : '#ffffff',
									}}
								>
									Log in
								</a>
							</Link>

							<Link href='/sign_up'>
								<a
									className={s.Drawer_Navbar_Actions_SignUp}
									style={{
										color: pricing ? '#121212' : '#ffffff',
									}}
								>
									Sign Up
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
