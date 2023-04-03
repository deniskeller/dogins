import { BaseContainer } from '@base/index';
import React, { useState } from 'react';
import s from './CookiePolicy.module.scss';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

const CookiePolicy: React.FC = () => {
	const navbar_links = [
		'What cookies do we use and why?',
		'How to control cookies?',
		'Browser controls',
		'Managing analytics cookies',
		'Managing local shared objects or flash cookies',
		'Social buttons',
		'External web services',
		'Email communications',
	];
	const [isActive, setIsActive] = useState(0);

	const handleClickNavbar = (index: number) => {
		setIsActive(index);

		scroller.scrollTo(`section-${index + 1}`, {
			duration: 0,
			delay: 0,
			smooth: true,
			offset: -100,
		});
	};

	return (
		<BaseContainer className={s.BaseContainer}>
			<div className={s.Ruls}>
				<div className={s.Ruls_Title}>
					<h1>Cookie policy</h1>
				</div>

				<div className={s.Ruls_Body}>
					<div className={s.Sidebar}>
						<ul className={s.Sidebar_Content}>
							{navbar_links?.map((link, index) => {
								return (
									<li
										className={`${s.Sidebar_Content_Item} ${
											isActive == index ? s.Active : ''
										}`}
										key={index}
										onClick={() => handleClickNavbar(index)}
									>
										<span>{link}</span>
									</li>
								);
							})}
						</ul>
					</div>

					<div className={s.Content}>
						<div className={s.Rul}>
							<p className={s.Rul_Description}>
								This Website uses cookies to improve the user experience and
								ensure that it is functioning effectively. This Cookie Notice is
								part of our Privacy Statement. For more information about us,
								and how we protect visitor information, please see our Privacy
								Statement. In order to provide you with a more personalised and
								responsive service we need to remember and store information
								about how you use this Website. This is done using small text
								files called cookies. Cookies contain small amounts of
								information and are downloaded to your computer or other device
								by a server for this Website. Your web browser then sends these
								cookies back to this Website on each subsequent visit so that it
								can recognise you and remember things like your user
								preferences. You can find more detailed information about
								cookies and how they work at http://www.aboutcookies.org/.
								Whenever you use this Website, information may be collected
								through the use of cookies and other technologies. By using this
								Website you agree to our use of cookies as described in this
								Cookie Notice and also to the use of cookies on the other
								country, regional or practice specific websites contained in
								deloitte.com that you may visit, as described in their
								accompanying cookie notices.
							</p>
						</div>

						<div className={s.Rul} id='section-1'>
							<div className={s.Rul_Title}>
								<span>WHAT COOKIES DO WE USE AND WHY?</span>
							</div>

							<p className={s.Rul_Description}>
								Some of the cookies we use are necessary to enable you to move
								around the Website and use its features such as accessing secure
								areas that may contain content for registered users. We also use
								functional cookies to record information about the choices you
								have made and to allow us to tailor the site to our users; for
								example, to remember your language or region or that you have
								already completed a survey. This information is usually
								anonymised and is not used for any other purpose. We or our
								service providers also use analytic services to help us
								understand how effective our content is, what interests our
								users have, and to improve how this Website works. In addition,
								we use web beacons or tracking pixels to count visitor numbers
								and performance cookies to track how many individual users
								access this Website and how often. This information is used for
								statistical purposes only and it is not our intention to use
								such information to personally identify any user. However, if
								you have registered and signed into this Website we may combine
								this information with information from our web analytic services
								and cookies to analyse how you use this Website in more detail.
								This Website does not use Targeting Cookies to deliver targeted
								advertising to Website visitors. Please contact us if you would
								like more detailed information on the cookies we use.
							</p>
						</div>

						<div className={s.Rul} id='section-2'>
							<div className={s.Rul_Title}>
								<span>HOW TO CONTROL COOKIES?</span>
							</div>

							<p className={s.Rul_Description}>
								«y using this Website you agree that we can place cookies on
								your computer or device as explained above. However, you can
								control and manage cookies in various ways. Please bear in mind
								that removing or blocking cookies can impact on your user
								experience and parts of this Website may no longer be fully
								accessible.
							</p>
						</div>

						<div className={s.Rul} id='section-3'>
							<div className={s.Rul_Title}>
								<span>BROWSER CONTROLS</span>
							</div>

							<p className={s.Rul_Description}>
								Most browsers will allow you to see what cookies you have and
								delete them on an individual basis or block cookies from
								particular or all websites. Be aware that any preference you
								have set will be lost if you delete all cookies, including your
								preference to opt-out from cookies as this itself requires an
								opt-out cookie to have been set. For more information on how to
								modify your browser settings to block or filter cookies, see
								&nbsp;
								<a href='/http://www.aboutcookies.org/' target='_blank'>
									http://www.aboutcookies.org/
								</a>
								&nbsp;or &nbsp;
								<a href='/http://www.cookiecentral.com/faq/' target='_blank'>
									http://www.cookiecentral.com/faq/
								</a>
								.
							</p>
						</div>

						<div className={s.Rul} id='section-4'>
							<div className={s.Rul_Title}>
								<span>MANAGING ANALYTICS COOKIES</span>
							</div>

							<p className={s.Rul_Description}>
								You can opt-out of having your anonymised browsing activity
								within websites recorded by analytics cookies. We use the
								following service providers and you can learn more about their
								privacy policies and how to opt-out of their cookies by clicking
								on following links: Adobe:&nbsp;
								<a
									href='/http://www.adobe.com/privacy/opt-out.html'
									target='_blank'
								>
									http://www.adobe.com/privacy/opt-out.html
								</a>
								&nbsp; | Google Analytics:&nbsp;
								<a
									href='/http://www.google.com/analytics/learn/privacy.html'
									target='_blank'
								>
									http://www.google.com/analytics/learn/privacy.html
								</a>
							</p>
						</div>

						<div className={s.Rul} id='section-5'>
							<div className={s.Rul_Title}>
								<span>MANAGING LOCAL SHARED OBJECTS OR FLASH COOKIES</span>
							</div>

							<p className={s.Rul_Description}>
								A local shared object or flash cookie is like most other browser
								cookies except that it can store additional types of
								information. These cookies cannot be controlled using the
								mechanisms listed above. Some parts of this Website use these
								types of cookies to store user preferences for media player
								functionality and without them some video content may not play
								properly. These cookies can be controlled manually by visiting
								the Adobe website -&nbsp;
								<a
									href='/http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html'
									target='_blank'
								>
									http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html
								</a>
							</p>
						</div>

						<div className={s.Rul} id='section-6'>
							<div className={s.Rul_Title}>
								<span>SOCIAL BUTTONS</span>
							</div>

							<p className={s.Rul_Description}>
								We use "social buttons" to enable our users to share or bookmark
								web pages. These are buttons for third party social media sites
								and these sites may log information about your activities on the
								Internet including on this Website. Please review the respective
								terms of use and privacy policies of these sites to understand
								exactly how they use your information and to find out how to
								opt-out, or delete, such information.
							</p>
						</div>

						<div className={s.Rul} id='section-7'>
							<div className={s.Rul_Title}>
								<span>EXTERNAL WEB SERVICES</span>
							</div>

							<p className={s.Rul_Description}>
								We sometimes use external web services on this Website to
								display content within the web pages of this Website, for
								example to display images, show videos or run polls. As with the
								social buttons, we cannot prevent these sites, or external
								domains, from collecting information on your use of this
								embedded content.
							</p>
						</div>

						<div className={s.Rul} id='section-8'>
							<div className={s.Rul_Title}>
								<span>EMAIL COMMUNICATIONS</span>
							</div>

							<p className={s.Rul_Description}>
								We may also use tracking technologies to determine whether you
								have read, clicked on, or forwarded certain email communications
								we send to you so that we can make our communications more
								helpful and interesting. If you do not wish us to confirm
								whether you have opened, clicked on or forwarded our
								communications, you will need to unsubscribe, as it is not
								possible for us to send these emails without tracking enabled.
								Registered subscribers can update their communication
								preferences at any time by contacting us, or you can unsubscribe
								following the instructions in the individual email
								communications you receive from us. We may modify or amend this
								Cookie Notice from time to time at our discretion. When we make
								changes to this notice, we will amend the revision date at the
								top of this page, and such modified or amended Cookie Notice
								shall be effective as to you and your information as of that
								revision date. We encourage you to periodically review this
								Cookie Notice to be informed about how we are using cookies.
							</p>
						</div>
					</div>
				</div>
			</div>
		</BaseContainer>
	);
};

export default CookiePolicy;
