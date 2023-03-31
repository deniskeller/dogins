import { BaseButton, BaseInput } from '@base/index';
import React from 'react';
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

	return (
		<>
			<div className={s.Feedback}>
				<div className={s.Feedback_Image}></div>

				<div className={s.Feedback_Body}>
					<div className={s.Form}>
						<div className={s.Form_Title}>
							<h3>
								For more information <br /> please visit our&nbsp;
								<a href=''>Venture Capital Fund.</a>
							</h3>
						</div>

						<div className={s.Form_Subtitle}>
							<p>
								If you are interested in any of them, please contact us by
								email&nbsp;
								<a href=''>info@doqins.com</a>&nbsp; or fill up the form and we
								will reply to you within 24 hours.
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
							title='Contact us'
							type='submit'
							className={s.Form_Button}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Feedback;