import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { BaseIcon } from '..';
import s from './BasePopup.module.scss';

interface Props {
	children: ReactNode | ReactNode[];
	className?: string;
	type?: string;
	popup: boolean;
	onClick: (popup: boolean) => void;
}

const BasePopup: React.FC<Props> = ({
	children,
	className,
	type = 'large',
	popup,
	onClick,
}) => {
	const thisClass = React.useRef<HTMLDivElement>(null);

	const hidePopup = useCallback(() => {
		onClick(false);
		document.body.style.overflow = '';
		document.body.style.height = '';
		document.body.style.paddingRight = '0px';
	}, [onClick]);

	const documentWidth = document.documentElement.clientWidth;
	const windowsWidth = window.innerWidth;
	const scrollbarWidth = windowsWidth - documentWidth;

	useEffect(() => {
		if (popup) {
			document.body.style.overflow = 'hidden';
			document.body.style.height = '100%';
			document.body.style.paddingRight = scrollbarWidth + 'px';
		}

		function onKeyDown(event: any) {
			if (event.keyCode === 27) {
				hidePopup();
			}
		}
		document.addEventListener('keydown', onKeyDown);
		return () => {
			document.removeEventListener('keydown', onKeyDown);
		};
	}, [hidePopup, popup, scrollbarWidth]);

	const thisPopup = React.useRef<HTMLDivElement>(null);

	const clickOutsideHandler = () => {
		hidePopup();
	};
	useOnClickOutside(thisPopup, clickOutsideHandler);

	return (
		<div
			className={` ${s.Wrapper} ${popup ? s.Visible : ''} ${className}`}
			ref={thisClass}
		>
			<div className={s.Container}>
				<div className={`${s.Popup} ${s['Popup_' + type]}`} ref={thisPopup}>
					<BaseIcon
						viewBox='0 0 24 24'
						icon={ALL_ICONS.CLOSE}
						className={s.Popup_Close}
						onClick={hidePopup}
					/>

					{children}
				</div>
			</div>
		</div>
	);
};

export default BasePopup;
