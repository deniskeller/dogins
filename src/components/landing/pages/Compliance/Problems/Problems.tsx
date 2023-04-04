import { BaseContainer } from '@base/index';
import React from 'react';
import s from './Problems.module.scss';

type Props = {};

const Problems: React.FC<Props> = () => {
	return (
		<>
			<div className='Wrapper-l'>
				<BaseContainer>
					<div className={s.Problems}>
						<div className={s.Problems_Title}>
							<h2>Client onboarding now</h2>
						</div>

						<div className={s.Problems_Subtitle}>
							<p>A Challenge for Regulated Institutions</p>
						</div>

						<div className={s.Problems_Content}></div>

						<div className={s.Problems_NextWay}>
							<span>
								And here is <br /> a solution!
							</span>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Problems;
