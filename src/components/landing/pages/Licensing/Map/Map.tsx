import { BaseContainer } from '@base/index';
import React from 'react';
import s from './Map.module.scss';

type Props = {};

const Map: React.FC<Props> = () => {
	return (
		<>
			<BaseContainer>
				<div className={s.Map}>
					<div className={s.Map_Title}>
						<h2>
							Here are countries <br /> where we provide our services
						</h2>
					</div>

					<div className={s.Map_Subtitle}>
						<p>Choose required country to find out more</p>
					</div>

					<div className={s.Map_Map}>Тут будет карта</div>
				</div>
			</BaseContainer>
		</>
	);
};

export default Map;
