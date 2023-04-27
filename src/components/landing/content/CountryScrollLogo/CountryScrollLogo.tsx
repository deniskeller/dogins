//@ts-nocheck
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React, { useEffect, useRef, useState } from 'react';
import s from './CountryScrollLogo.module.scss';

type Props = {};

const CountryScrollLogo: React.FC<Props> = () => {
	const refLogo = useRef<HTMLDivElement | null>();
	const refLogoWrapper = useRef<HTMLDivElement | null>();

	const [width, setWidth] = useState('');
	const [height, setHeight] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			//максимальная ширина блока
			var maxW = +window
				.getComputedStyle(refLogo.current)
				.getPropertyValue('min-width')
				.split('px')[0];
			//минимальная ширина блока
			var minW = +window
				.getComputedStyle(refLogo.current)
				.getPropertyValue('max-width')
				.split('px')[0];
			//разница мин и макс ширины блока
			var deltaW = maxW - minW;

			var blockH = refLogo?.current?.clientHeight;
			var pageH = refLogoWrapper.current?.clientHeight + blockH;
			var blockX = refLogo?.current?.offsetTop + blockH;
			var width = Math.round(((pageH - blockX) * deltaW) / pageH);

			if (blockX >= 0 && blockX <= pageH) {
				setWidth(minW + width);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {};
	}, []);
	return (
		<div className={s.Wrapper} ref={refLogoWrapper}>
			<div
				className={s.Logo}
				ref={refLogo}
				style={{
					width: `${width}px`,
				}}
			>
				<BaseIcon icon={ALL_ICONS.LOGO} viewBox='0 0 280 316' />
			</div>
		</div>
	);
};

export default CountryScrollLogo;
