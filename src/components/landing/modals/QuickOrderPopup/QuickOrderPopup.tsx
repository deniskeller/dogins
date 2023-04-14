import { BaseButton } from '@base/index';
import React from 'react';
import s from './QuickOrderPopup.module.scss';

interface Props {
	popup: boolean;
	onClick: (popup: boolean) => void;
}

const QuickOrderPopup: React.FC<Props> = ({ popup = false, onClick }) => {
	return (
		<div
			className={`${s.QuickOrderPopup} ${
				popup ? s.QuickOrderPopup_Visible : ''
			}`}
		>
			<div className={s.QuickOrderPopup_Body}>
				<div className={s.Question}>
					<span>Made a choice?</span>
				</div>
				<div className={s.Aqtion}>Make a quick order now</div>
			</div>

			<BaseButton
				title='Order now'
				className={s.Button}
				onClick={() => onClick(false)}
			/>
		</div>
	);
};

export default QuickOrderPopup;
