import React from 'react';
import s from './Header.module.scss';

type Props = {};

const Header: React.FC<Props> = () => {
	return (
		<>
			<div className={s.Wrapper}>
				<div className={s.Container}>
					<div className={s.Header}>
						<div className={s.Header_Title}>
							<h1>
								WELCOME TO DOQINS & PARTNERS FAMILY OFFICE THE FINANCIAL EXPERTS
								SINCE 2005
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
