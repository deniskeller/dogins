import { BaseContainer } from '@base/index';
import React from 'react';
import s from './Widget.module.scss';

type Props = {};

const Widget: React.FC<Props> = () => {
	return (
		<>
			<div className='Wrapper'>
				<BaseContainer>
					<div className={s.Widget}>
						<h1>Тут будет виджет</h1>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Widget;
