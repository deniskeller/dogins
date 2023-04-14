import { BaseButton } from '@base/index';
import React from 'react';
import s from './CreateOrderPopup.module.scss';

interface Props {
	popup: boolean;
	// onClick: (popup: boolean) => void;
}

const CreateOrderPopup: React.FC<Props> = ({
	popup = false,
	//  onClick
}) => {
	return (
		<div
			className={`${s.CreateOrderPopup} ${
				popup ? s.CreateOrderPopup_Visible : ''
			}`}
		>
			{/* <BaseButton
				title='Order now'
				className={s.Button}
				onClick={() => onClick(false)}
			/> */}
		</div>
	);
};

export default CreateOrderPopup;
