import React, { ReactNode } from 'react';
import s from './VacancyItem.module.scss';

interface IProps {
	children: ReactNode | ReactNode[];
	title: string;
}

const VacancyItem: React.FC<IProps> = ({ title, children }) => {
	const [isVisible, setIsVisible] = React.useState<boolean>(true);

	return (
		<>
			<div
				className={`${s.VacancyItem} ${!isVisible ? s.VacancyItem_Active : ''}`}
			>
				<div
					className={s.VacancyItem_Header}
					onClick={() => setIsVisible(!isVisible)}
				>
					<div className={s.VacancyItem_Header_Title}>{title}</div>

					<svg
						width='37'
						height='37'
						viewBox='0 0 37 37'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={`${s.VacancyItem_Header_Icon} ${
							!isVisible ? s.Open : ''
						}`}
					>
						<path
							d='M29.2923 21.5833L18.5007 32.375M18.5007 32.375L7.70898 21.5833M18.5007 32.375L18.5007 4.625'
							stroke='white'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>

				<div
					className={`${s.VacancyItem_Content} ${
						isVisible ? s.VacancyItem_Content_Hidden : ''
					}`}
				>
					<div className={s.Container}>{children}</div>
				</div>
			</div>
		</>
	);
};

export default VacancyItem;
