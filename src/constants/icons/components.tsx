export enum ComponentsIcons {
	CHECK = 'CHECK',
	SELECT_CHEVRON = 'SELECT_CHEVRON',
	CLOSE = 'CLOSE',
	LINK = 'LINK',
}

export const componentsIcons = {
	[ComponentsIcons.CHECK]: (
		<>
			<path
				d='M6.25 16.25L11.25 21.25L23.75 8.75'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),

	[ComponentsIcons.SELECT_CHEVRON]: (
		<>
			<path
				d='M19 9L12 16L5 9'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),

	[ComponentsIcons.CLOSE]: (
		<>
			<path
				d='M6 18L18 6M6 6L18 18'
				stroke='white'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),

	[ComponentsIcons.LINK]: (
		<>
			<path
				d='M13.8284 10.6716C12.2663 9.10948 9.73367 9.10948 8.17157 10.6716L4.17157 14.6716C2.60948 16.2337 2.60948 18.7663 4.17157 20.3284C5.73367 21.8905 8.26633 21.8905 9.82843 20.3284L10.93 19.2269M10.1716 14.3284C11.7337 15.8905 14.2663 15.8905 15.8284 14.3284L19.8284 10.3284C21.3905 8.76633 21.3905 6.23367 19.8284 4.67157C18.2663 3.10948 15.7337 3.10948 14.1716 4.67157L13.072 5.77118'
				stroke='white'
				strokeOpacity='0.7'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</>
	),
};
