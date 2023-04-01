export enum ComponentsIcons {
	CHECK = 'CHECK',
	SELECT_CHEVRON = 'SELECT_CHEVRON',
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
};
