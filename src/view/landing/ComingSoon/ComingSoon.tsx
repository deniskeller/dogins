import { BaseButton, BaseContainer } from '@base/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './ComingSoon.module.scss';

const ComingSoon: React.FC = () => {
	const router = useRouter();

	return (
		<div className={s.Wrapper}>
			<BaseContainer className={s.BaseContainer}>
				<div className={s.Body}>
					<div className={s.Borders}>
						<div className={s.Borders_Item}></div>
						<div className={s.Borders_Item}></div>
						<div className={s.Borders_Item}></div>
						<div className={s.Borders_Item}></div>
					</div>

					<div className={s.Title}>
						<h1>Coming soon</h1>
					</div>

					<div className={s.Subtitle}>
						<p>Page you're looking for will be here soon</p>
					</div>

					<BaseButton
						title='Main page'
						className={s.Button}
						onClick={() => router.push('/')}
					/>
				</div>
			</BaseContainer>
		</div>
	);
};

export default ComingSoon;
