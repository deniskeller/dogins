import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import s from './Feedback.module.scss';

type Props = {};

const Feedback: React.FC<Props> = () => {
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

						<div className={s.Form_Inputs}></div>

						<div className={s.Form_Button}>
							<span>Contact us</span>

							<BaseIcon
								icon={ALL_ICONS.ARROW}
								viewBox='0 0 44 24'
								className={s.Form_Button_Icon}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Feedback;
