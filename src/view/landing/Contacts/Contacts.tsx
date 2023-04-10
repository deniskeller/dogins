import BaseSelect from '@base/BaseSelect/BaseSelect';
import {
	BaseButton,
	BaseContainer,
	BaseIcon,
	BaseInput,
	BaseTextarea,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import {
	Header,
	MapContacts,
	PhoneInput,
	SubmitForm,
} from '@content/landing/index';
import { countries } from '@services/index';
import Link from 'next/link';
import React, { useState } from 'react';
import s from './Contacts.module.scss';

interface IValue {
	name_surname: string;
	email: string;
	message: string;
	country: string;
	phone: string;
}

const Contacts: React.FC = () => {
	const [value, setValue] = React.useState<IValue>({
		name_surname: '',
		email: '',
		message: '',
		country: '',
		phone: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	// useEffect(() => {
	// 	console.log('country: ', value.country);
	// }, [value.country]);

	const manhattan = {
		lat: 40.762138342147594,
		lng: -73.97841152698312,
	};

	const [submit, setSubmit] = useState(false);
	return (
		<>
			<Header image='contacts-header-bg.jpeg' title='Contact us' />
			<div className='Wrapper'>
				<BaseContainer>
					<div className={s.Contacts}>
						<div className={s.Form}>
							<div className={s.Form_ContactUs}>
								<div className={s.Title}>
									<span>Contact us</span>
								</div>

								<div className={s.Info}>
									<div className={s.Address}>
										<div className={s.Address_Mail}>
											<a href='mailto:info@doqins.com'>info@doqins.com</a>
										</div>

										<div className={s.Address_Name}>
											New York, Manhattan <br />
											1330 6TH AVE., 23RD FLOOR, NEW YORK, NEW YORK, 10019
										</div>
									</div>

									<div className={s.WorkingHours}>
										<div className={s.WorkingHours_Label}>
											<span>Working hours:</span>
										</div>

										<div className={s.WorkingHours_Value}>
											Monday-Friday <br />
											9:00 AM – 17:00 PM NYC Time-Zone.
										</div>
									</div>
								</div>

								<div className={s.Map}>
									<MapContacts
										center={manhattan}
										marker_title='New York, Manhattan
										1330 6TH AVE., 23RD FLOOR, NEW YORK, NEW YORK, 10019'
									/>
								</div>

								<div className={s.Social}>
									<Link href='https://www.instagram.com/'>
										<a
											className={s.Social_Item}
											target='_blank'
											rel='noreferrer'
										>
											<BaseIcon icon={ALL_ICONS.FACEBOOK} viewBox='0 0 23 24' />
										</a>
									</Link>

									<Link href=''>
										<a
											className={s.Social_Item}
											target='_blank'
											rel='noreferrer'
										>
											<BaseIcon icon={ALL_ICONS.LINKEDIN} viewBox='0 0 23 24' />
										</a>
									</Link>

									<Link href=''>
										<a
											className={s.Social_Item}
											target='_blank'
											rel='noreferrer'
										>
											<BaseIcon icon={ALL_ICONS.TWITTER} viewBox='0 0 23 24' />
										</a>
									</Link>
								</div>
							</div>
							{!submit ? (
								<div
									className={s.Form_WriteToUs}
									style={{ opacity: !submit ? '1' : '0' }}
								>
									<div className={s.Title}>
										<span>Write to us</span>
									</div>

									<div className={s.Description}>
										<p>
											Please feel free to contact us for any questions you might
											have. If you are the existing customer and want to discuss
											any issue, please contact your personal manager.
										</p>
									</div>

									<BaseInput
										name='name_surname'
										label='Name Surname'
										value={value.name_surname}
										onChange={(val: string) => setNewValue(val, 'name_surname')}
										className={s.Input}
									/>

									<BaseInput
										name='email'
										label='Email'
										value={value.email}
										onChange={(val: string) => setNewValue(val, 'email')}
										className={s.Input}
									/>

									<PhoneInput
										value={value.phone}
										onChange={(val: string) => setNewValue(val, 'phone')}
										className={s.Input}
									/>

									<BaseSelect
										label='Country'
										options={countries}
										onChange={(val: string) => setNewValue(val, 'country')}
										className={s.Input}
									/>

									<BaseTextarea
										name='message'
										label='How can we help?'
										type='text'
										value={value.message}
										onChange={(val: string) => setNewValue(val, 'message')}
										className={s.Input}
									/>

									<div className={s.Warning}>
										<p>
											* Please do not include confidential or sensitive
											information in your message.
										</p>
									</div>

									<BaseButton
										title='Submit'
										type='submit'
										className={s.Button}
										onClick={() => setSubmit(true)}
									/>
								</div>
							) : (
								<div
									className={s.Submit}
									style={{ opacity: submit ? '1' : '0' }}
								>
									<SubmitForm />
								</div>
							)}
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Contacts;
