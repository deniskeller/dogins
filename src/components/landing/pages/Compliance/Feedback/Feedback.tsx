import { BaseButton, BaseInput } from '@base/index';
import { SubmitForm } from '@content/landing/index';
import React, { useState } from 'react';
import s from './Feedback.module.scss';

type Props = {};

interface IValue {
	name: string;
	email: string;
}

const Feedback: React.FC<Props> = () => {
	const [value, setValue] = React.useState<IValue>({
		name: '',
		email: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [submit, setSubmit] = useState(false);

	return (
		<div className='Wrapper-l'>
			<div className={s.Feedback}>
				<div className={s.Feedback_Image}></div>

				<div className={s.Feedback_Body}>
					{!submit ? (
						<div className={s.Form}>
							<div className={s.Form_Title}>
								<h3>Let's talk</h3>
							</div>

							<div className={s.Form_Subtitle}>
								<p>
									If you are interested in any of them, please contact us by
									email&nbsp;
									<a href=''>info@doqins.com</a>&nbsp; or fill up the form and
									we will reply to you within 24 hours.
								</p>
							</div>

							<div className={s.Form_Inputs}>
								<BaseInput
									name='name'
									label='Name'
									value={value.name}
									onChange={(val: string) => setNewValue(val, 'name')}
									className={s.Input}
								/>

								<BaseInput
									name='email'
									label='Email'
									value={value.email}
									onChange={(val: string) => setNewValue(val, 'email')}
									className={s.Input}
								/>
							</div>

							<BaseButton
								title='Submit'
								type='submit'
								className={s.Form_Button}
								onClick={() => setSubmit(true)}
							/>
						</div>
					) : (
						<div className={s.Form_Submit}>
							<SubmitForm />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Feedback;
