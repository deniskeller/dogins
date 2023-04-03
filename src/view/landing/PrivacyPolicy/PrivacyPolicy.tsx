import { BaseContainer } from '@base/index';
import React, { useState } from 'react';
import s from './PrivacyPolicy.module.scss';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

const PrivacyPolicy: React.FC = () => {
	const navbar_links = [
		'Introduction',
		'Information collection',
		'Log information, cookies and web beacons',
		'Information use',
		'Disclosure of information to third parties',
		'Blogs, forums, wikis and other social media',
		'Access to information',
		'Information security',
		'Changes to our privacy statement',
		"Children's privacy protection",
		"Visitors' questions",
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
					<h1>Privacy Policy</h1>
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
						<div className={s.Rul} id='section-1'>
							<div className={s.Rul_Title}>
								<span>INTRODUCTION</span>
							</div>

							<p className={s.Rul_Description}>
								www.doqins.com is comprised in one individual website. These
								Terms of Use apply to the current website that you were viewing,
								before clicking on these Terms of Use. Such individual website
								is referred to in these Terms of Use as "this Website." This
								Privacy Statement applies only to the specific webpage of
								www.doqins.com designated as Doqins & Partners Limited in the
								United States of America referred to below as "this Website".
								The "Doqins" refers to Doqins & Partners Limited ("DP"), it is
								the entity that is providing this Website and is referred to in
								these Privacy Statement as "we", "us", or "our". Doqins is a
								privacy conscious organisation. We are the entity that is
								providing this Website and this Privacy Statement explains how
								we protect visitors' information gathered via this Website. By
								using this Website you are agreeing to the use of your
								information as described in this Privacy Statement. This Privacy
								Statement may be supplemented or amended from time to time by
								privacy statements that are specific to certain areas of this
								Website (e.g., recruitment). For more detail about the online
								recruitment process, please review the specific statement
								governing that area. If you have any questions regarding this
								Privacy Statement, please contact webmaster services using the
								contact us link.
							</p>
						</div>

						<div className={s.Rul} id='section-2'>
							<div className={s.Rul_Title}>
								<span>INFORMATION COLLECTION</span>
							</div>

							<p className={s.Rul_Description}>
								As a visitor, you do not have to submit any personal information
								in order to use the Website. This Website only collects personal
								information that is specifically and voluntarily provided by
								visitors. Such information may consist of, but is not limited
								to, your name, current job title, company address, email address
								and telephone and fax numbers. We may also store and maintain
								any content that you provide, including but not limited to
								postings on any blogs, forums, wikis and other social media
								applications and services that we may provide. We do not usually
								seek sensitive information (e.g., data relating to race or
								ethnic origin, religious beliefs, criminal record, physical or
								mental health, or sexual orientation) from visitors. We will,
								where necessary, obtain your explicit consent to collect and use
								such information.
							</p>
						</div>

						<div className={s.Rul} id='section-3'>
							<div className={s.Rul_Title}>
								<span>LOG INFORMATION, COOKIES AND WEB BEACONS</span>
							</div>

							<p className={s.Rul_Description}>
								This site collects standard internet log information including
								your IP address, browser type and language, access times and
								referring website addresses. To ensure that this Website is well
								managed and to facilitate improved navigation, we or our service
								providers may also use cookies (small text files stored in a
								user's browser) or Web beacons (electronic images that allow
								this Website to count visitors who have accessed a particular
								page and to access certain cookies) to collect aggregate data.
								Additional information on how we use cookies and other tracking
								technologies and how you can control these can be found in our
								cookie notice.
							</p>
						</div>

						<div className={s.Rul} id='section-4'>
							<div className={s.Rul_Title}>
								<span>INFORMATION USE</span>
							</div>

							<p className={s.Rul_Description}>
								At times, you may provide personal information via this site,
								for example, to gain access to specific content, attend a hosted
								event, respond to a survey, or request communications about
								specific areas of interest. In such cases, the information you
								submit will be used to manage your request and to customise and
								improve this Website and related services offered to you. We may
								also use your personal information for marketing purposes, or to
								send you promotional materials or communications regarding
								services provided by entities within the Deloitte Network that
								we feel may be of interest to you. We may also contact you to
								seek feedback on services provided by entities within the
								Deloitte Network or for market or other research purposes. Your
								personal information may also be used to protect our rights or
								property and that of our users and, where appropriate, to comply
								with legal process. You may at any time request that we
								discontinue sending you emails or other communications generated
								in response to your provision of personal information via this
								Website.
							</p>
						</div>

						<div className={s.Rul} id='section-5'>
							<div className={s.Rul_Title}>
								<span>DISCLOSURE OF INFORMATION TO THIRD PARTIES</span>
							</div>

							<p className={s.Rul_Description}>
								We may provide your personal information to other entities
								within the Deloitte Network in order to provide you with
								information that could be of interest to you and conduct market
								or other research. Personal information may also be disclosed to
								other entities within the Deloitte Network and other third
								parties in order to respond to your requests or inquiries, as
								part of a corporate transaction such as a sale, divestiture,
								reorganisation, merger or acquisition, or where those parties
								handle information on our behalf. All of these disclosures may
								involve the transfer of personal information to countries or
								regions without data protection rules similar to those in effect
								in your area of residence. Personal information may also be
								disclosed to law enforcement, regulatory, or other government
								agencies, or to other third parties, in each case to comply with
								legal or regulatory obligations or requests. By providing
								information through this Website, you are consenting to the
								disclosures described above.
							</p>
						</div>

						<div className={s.Rul} id='section-6'>
							<div className={s.Rul_Title}>
								<span>BLOGS, FORUMS, WIKIS AND OTHER SOCIAL MEDIA</span>
							</div>

							<p className={s.Rul_Description}>
								This Website may host various blogs, forums, wikis and other
								social media applications or services that allow you to share
								content with other users (collectively "Social Media
								Applications"). Any personal information or other information
								that you contribute to any Social Media Application can be read,
								collected, and used by other users of that Social Media
								Application over whom we have little or no control. Therefore,
								we are not responsible for any other user's use, misuse, or
								misappropriation of any personal information or other
								information that you contribute to any Social Media Application.
							</p>
						</div>

						<div className={s.Rul} id='section-7'>
							<div className={s.Rul_Title}>
								<span>ACCESS TO INFORMATION</span>
							</div>

							<p className={s.Rul_Description}>
								Visitors who would like to request access to their information,
								to update their details, or unsubscribe from communications
								should contact webmaster services using the contact us link. In
								all cases we will treat requests to access information or change
								information in accordance with applicable legal requirements.
							</p>
						</div>

						<div className={s.Rul} id='section-8'>
							<div className={s.Rul_Title}>
								<span>INFORMATION SECURITY</span>
							</div>

							<p className={s.Rul_Description}>
								We have in place reasonable commercial standards of technology
								and operational security to protect all information provided by
								visitors via this Website from unauthorised access, disclosure,
								alteration, or destruction.
							</p>
						</div>

						<div className={s.Rul} id='section-9'>
							<div className={s.Rul_Title}>
								<span>CHANGES TO OUR PRIVACY STATEMENT</span>
							</div>

							<p className={s.Rul_Description}>
								We may modify or amend this Privacy Statement from time to time
								at our discretion. When we make changes to this Statement, we
								will amend the revision date at the top of this page, and such
								modified or amended Privacy Statement shall be effective as to
								you and your information as of that revision date. We encourage
								you to periodically review this Privacy Statement to be informed
								about how we are protecting your information.
							</p>
						</div>

						<div className={s.Rul} id='section-10'>
							<div className={s.Rul_Title}>
								<span>CHILDREN'S PRIVACY PROTECTION</span>
							</div>

							<p className={s.Rul_Description}>
								We understand the importance of protecting children's privacy in
								the interactive online world. This Website is not designed for
								or intentionally targeted at children 13 years of age or
								younger. It is not our policy to intentionally collect or
								maintain information about anyone under the age of 13.
							</p>
						</div>

						<div className={s.Rul} id='section-11'>
							<div className={s.Rul_Title}>
								<span>VISITORS' QUESTIONS</span>
							</div>

							<p className={s.Rul_Description}>
								If you have any questions or concerns regarding your privacy
								while using this Website, please direct them to webmaster
								services using the contact us <a href=''>link</a>.
							</p>
						</div>
					</div>
				</div>
			</div>
		</BaseContainer>
	);
};

export default PrivacyPolicy;
