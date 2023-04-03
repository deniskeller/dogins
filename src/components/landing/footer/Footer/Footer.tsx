import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Logo } from '@content/landing/index';
import Link from 'next/link';
import s from './Footer.module.scss';

interface list {
	name: string;
	href: string;
}

interface Links {
	title: string;
	list: list[];
}

const Links: Links[] = [
	{
		title: 'Products',
		list: [
			{ name: 'Compliance', href: '/compliance' },
			{ name: 'Licensing', href: '/licensing' },
			{ name: 'Investments', href: '/investments' },
		],
	},
	{
		title: 'Company',
		list: [
			{ name: 'About', href: '/about' },
			{ name: 'News&Insights', href: '/news-and-insights' },
			{ name: 'Careers', href: '/careers' },
			{ name: 'Eco', href: '/eco' },
		],
	},
	{
		title: 'Resources',
		list: [
			{ name: 'Contacts', href: '/contacts' },
			{ name: 'Personal Data Protection', href: '/personal-data-protection' },
			{ name: 'Services Agreement', href: '/services-agreement' },
			{ name: 'Intellectual Property', href: '/intellectual-property' },
		],
	},
	{
		title: 'Pricing',
		list: [
			{ name: 'Financial licensing', href: '/financial-licensing' },
			{ name: 'Compliance software', href: '/compliance-software' },
			{ name: 'Payment software', href: '/payment-software' },
			{ name: 'Support services', href: '/support-services' },
		],
	},
	{
		title: 'Website rules',
		list: [
			{ name: 'Privacy Policy', href: '/privacy-policy' },
			{ name: 'Cookies Policy', href: '/cookies-policy' },
			{ name: 'Terms of Use', href: '/terms-of-use' },
		],
	},
];

interface Props {
	type?: string;
}
const Footer: React.FC<Props> = ({ type }) => {
	return (
		<>
			<div
				className={s.Wrapper}
				style={{ background: type == 'white' ? '#ffffff' : '#222222' }}
			>
				<div
					className={`${s.Container} ${
						type == 'white' ? s.Container_White : ''
					}`}
				>
					<div className={s.Footer}>
						<div className={s.Footer_LogoSocial}>
							<Logo className={s.Footer_LogoSocial_Logo} type={type} />

							<div className={s.Footer_LogoSocial_Socials}>
								<div className={s.Footer_LogoSocial_Socials_Items}>
									<Link href='https://facebook.com/'>
										<a
											className={`${s.SocialItem} ${
												type == 'white' ? s.SocialItem_White : ''
											}`}
											target='_blank'
											rel='noreferrer'
										>
											<BaseIcon icon={ALL_ICONS.FACEBOOK} viewBox='0 0 23 24' />
										</a>
									</Link>

									<Link href='https://facebook.com/'>
										<a
											className={`${s.SocialItem} ${
												type == 'white' ? s.SocialItem_White : ''
											}`}
											target='_blank'
											rel='noreferrer'
										>
											<BaseIcon icon={ALL_ICONS.LINKEDIN} viewBox='0 0 23 24' />
										</a>
									</Link>

									<Link href='https://facebook.com/'>
										<a
											className={`${s.SocialItem} ${
												type == 'white' ? s.SocialItem_White : ''
											}`}
											target='_blank'
											rel='noreferrer'
										>
											<BaseIcon icon={ALL_ICONS.TWITTER} viewBox='0 0 23 24' />
										</a>
									</Link>
								</div>

								<div
									className={`${s.Footer_LogoSocial_Socials_Copywriting} ${
										type == 'white'
											? s.Footer_LogoSocial_Socials_Copywriting_White
											: ''
									}`}
								>
									<p>© 2023 Doqins & Partners Limited</p>
								</div>
							</div>
						</div>

						<div className={s.Footer_NavbarPartners}>
							<ul className={s.Footer_NavbarPartners_Navbar}>
								{Links?.map((link, index) => {
									return (
										<li className={s.Link} key={index}>
											<div
												className={`${s.Link_Title} ${
													type == 'white' ? s.Link_Title_White : ''
												}`}
											>
												<span>{link.title}</span>
											</div>

											<ul className={s.Link_List}>
												{link.list?.map((el, i) => {
													return (
														<li
															key={i}
															className={`${s.Link_List_Item} ${
																type == 'white' ? s.Link_List_Item_White : ''
															}`}
														>
															<Link href={el.href}>
																<a>{el.name}</a>
															</Link>
														</li>
													);
												})}
											</ul>
										</li>
									);
								})}
							</ul>

							<BaseIcon
								icon={ALL_ICONS.PARTNERS}
								viewBox='0 0 234 55'
								className={`${s.Footer_NavbarPartners_Partners} ${
									type == 'white' ? s.Footer_NavbarPartners_Partners_White : ''
								}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
