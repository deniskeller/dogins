import { BaseCheckbox, BaseContainer } from '@base/index';
import { PricingHeader, PricingInsideNavbar } from '@content/landing/index';
import React from 'react';
import s from './PaymentSoftware.module.scss';

interface ISoftwareList {
	id: number;
	name: string;
	price: string;
	checked: boolean;
}

const software_list: ISoftwareList[] = [
	{ id: 1, name: 'Main e-Bank Module', price: '300,000', checked: false },
	{ id: 2, name: 'Cryptocurrency Module', price: '100,000', checked: false },
	{ id: 3, name: '45 Currency Module', price: '100,000', checked: false },
	{ id: 4, name: 'AML Module', price: '100,000', checked: false },
	{ id: 5, name: 'Passive SWIFT (GB) Module', price: '75,000', checked: false },
	{
		id: 6,
		name: 'Card Module T1 (for payment card issue through issuer’s bank)',
		price: '150,000',
		checked: false,
	},
	{
		id: 7,
		name: 'Card Module T2 (payment card acquiring for deposits)',
		price: '350,000',
		checked: false,
	},
	{
		id: 8,
		name: 'British Correspondence Accounts Bank Connection',
		price: '150,000',
		checked: false,
	},
	{
		id: 9,
		name: 'Online KYC Service for B2C/B2B',
		price: '100,000',
		checked: false,
	},
	{ id: 10, name: 'Company House Register', price: '50,000', checked: false },
	{ id: 11, name: 'EBR Register', price: '75,000', checked: false },
	{
		id: 12,
		name: 'Compass White Label Setup',
		price: '100,000',
		checked: false,
	},
];

const PaymentSoftware: React.FC = () => {
	const [selected, setSelected] =
		React.useState<ISoftwareList[]>(software_list);
	return (
		<>
			<PricingHeader image='pricing-header-bg.jpeg' title='Payment software' />

			<BaseContainer className={s.BaseContainer}>
				<div className={s.PaymentSoftware}>
					<div className={s.PoweredBy}>
						<div className={s.PoweredBy_Label}>
							<span>Powered by</span>
						</div>
						<div className={s.PoweredBy_Icon}>
							<svg
								width='211'
								height='67'
								viewBox='0 0 211 67'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M55.9047 19.8832C59.0865 19.8832 61.9835 20.3579 64.5934 21.3049C67.2033 22.2519 69.4537 23.5561 71.3445 25.2129C73.2354 26.8719 74.7061 28.8536 75.7566 31.1647C76.8071 33.4736 77.3323 35.9898 77.3323 38.7134C77.3323 40.7273 76.7627 42.2666 75.6212 43.3311C74.482 44.398 72.8899 45.0777 70.8496 45.375L48.6143 48.6585C49.2749 50.6125 50.6242 52.078 52.6645 53.055C54.7048 54.032 57.0462 54.5205 59.6864 54.5205C62.1469 54.5205 64.472 54.2094 66.664 53.5873C68.8537 52.9652 70.6395 52.2416 72.0192 51.4121C72.981 52.0043 73.791 52.8315 74.4516 53.8984C75.1123 54.9652 75.4414 56.0874 75.4414 57.2741C75.4414 59.9378 74.1809 61.9217 71.6597 63.2236C69.7408 64.2306 67.5791 64.9126 65.1793 65.2675C62.9446 65.6097 60.6873 65.7876 58.4259 65.7998C54.8845 65.7998 51.6 65.3113 48.5676 64.3343C45.5375 63.3573 42.895 61.8918 40.6469 59.9378C38.3965 57.9838 36.6247 55.5275 35.3361 52.5642C34.0452 49.6056 33.3985 46.1423 33.3985 42.1744C33.3985 38.2664 34.0452 34.9068 35.3361 32.0933C36.6247 29.2822 38.3218 26.9733 40.4205 25.1668C42.5193 23.3615 44.9712 22.0008 47.6245 21.1689C50.2992 20.3145 53.0933 19.8798 55.9047 19.8809V19.8832ZM145.423 5.67293C146.744 5.67293 147.928 5.76279 148.978 5.94022C150.028 6.11765 150.916 6.4725 151.635 7.00478C152.356 7.53936 152.895 8.26289 153.255 9.18229C153.614 10.0994 153.796 11.2976 153.796 12.7769V54.88C153.796 57.6635 152.475 59.8825 149.835 61.5392C148.093 62.6683 145.843 63.6591 143.081 64.5163C140.322 65.3758 137.14 65.8044 133.54 65.8044C129.64 65.8044 126.14 65.2721 123.052 64.2052C119.961 63.1407 117.349 61.6014 115.22 59.5875C113.078 57.5579 111.417 55.0855 110.357 52.3476C109.249 49.5364 108.693 46.3543 108.693 42.8012C108.693 38.8932 109.293 35.5036 110.493 32.6325C111.693 29.7592 113.359 27.3766 115.488 25.4825C117.649 23.5705 120.196 22.1325 122.961 21.2634C125.814 20.3463 128.89 19.8855 132.189 19.8855C133.366 19.8835 134.542 19.9876 135.7 20.1966C136.841 20.4039 137.77 20.6574 138.492 20.9523V6.56237C139.092 6.38494 140.051 6.19369 141.372 5.98631C142.691 5.77892 144.043 5.67293 145.423 5.67293ZM185.115 19.8832C188.656 19.8832 191.866 20.4316 194.747 21.5261C197.63 22.6229 200.104 24.1622 202.175 26.1461C204.245 28.1277 205.851 30.5426 206.991 33.3837C208.132 36.2271 208.702 39.3655 208.702 42.7988C208.702 46.4695 208.132 49.7415 206.991 52.6149C205.851 55.4837 204.245 57.8985 202.175 59.8502C200.104 61.8042 197.63 63.2835 194.747 64.2928C191.866 65.2998 188.656 65.8021 185.115 65.8021C181.573 65.8021 178.364 65.2698 175.483 64.2029C172.602 63.1384 170.126 61.613 168.055 59.629C165.984 57.6474 164.378 55.2325 163.239 52.3914C162.097 49.548 161.528 46.352 161.528 42.7988C161.528 39.3056 162.097 36.1396 163.239 33.2962C164.378 30.4527 165.984 28.0425 168.055 26.0562C170.126 24.0746 172.602 22.5492 175.483 21.4823C178.364 20.4178 181.576 19.8832 185.115 19.8832ZM92.1862 19.7933C93.5075 19.7933 94.6934 19.8832 95.7439 20.0606C96.7944 20.238 97.6791 20.5929 98.3981 21.1275C99.1195 21.6574 99.6751 22.3856 100.065 23.3027C100.455 24.2198 100.649 25.4203 100.649 26.8996L100.485 64.4195C99.5046 64.961 98.5825 65.302 97.7235 65.4403C96.4325 65.6477 95.1276 65.7514 93.8063 65.7514C92.6157 65.7611 91.4264 65.6716 90.251 65.4841C89.2005 65.3067 88.3158 64.9518 87.5944 64.4195C86.8506 63.8554 86.2754 63.1029 85.93 62.242C85.5401 61.3249 85.3464 60.1267 85.3464 58.6474V20.5929C86.0047 20.4754 86.9805 20.3118 88.2714 20.1044C89.56 19.897 90.8673 19.7933 92.1862 19.7933ZM0 35.1902C1.92823 37.4115 4.17861 38.9462 6.75114 39.7895C9.0949 40.5614 11.6231 40.6306 14.3333 39.9969C14.4278 39.9746 14.5261 39.9737 14.621 39.9944C14.7158 40.015 14.8047 40.0566 14.8809 40.1161C14.9571 40.1755 15.0186 40.2513 15.0608 40.3376C15.1031 40.4239 15.1249 40.5186 15.1247 40.6144V49.548C15.1247 51.0872 15.6196 52.502 16.6094 53.1518C17.5992 53.8039 18.9952 54.1288 20.795 54.1288C21.6961 54.1288 22.6275 54.0551 23.587 53.9076C24.5464 53.7601 25.3868 53.2486 26.1082 53.0135C26.6474 53.6633 27.112 54.3892 27.5018 55.1887C27.894 55.9883 28.0877 56.9492 28.0877 58.076C28.0877 60.3249 27.2333 62.1614 25.5222 63.5831C23.8111 65.0025 20.795 65.7122 16.474 65.7122C11.1935 65.7122 7.12698 64.5301 4.27666 62.1614C1.42633 59.7926 0 55.9445 0 50.6148V35.1902ZM185.115 31.697C182.594 31.697 180.644 32.6579 179.262 34.5842C177.885 36.5083 177.192 39.2457 177.192 42.7988C177.192 46.4096 177.899 49.1793 179.309 51.1033C180.719 53.0274 182.685 53.9905 185.206 53.9905C187.727 53.9905 189.662 53.0135 191.012 51.0595C192.363 49.1055 193.038 46.352 193.038 42.7988C193.038 39.2457 192.347 36.5083 190.967 34.5842C189.585 32.6579 187.636 31.697 185.115 31.697ZM134.259 31.697C131.019 31.697 128.528 32.6141 126.789 34.4506C125.048 36.2848 124.175 39.0683 124.175 42.7988C124.175 46.4695 124.987 49.2369 126.607 51.1033C128.227 52.9698 130.569 53.9007 133.629 53.9007C134.71 53.9007 135.683 53.7394 136.557 53.4122C137.425 53.0873 138.102 52.7163 138.58 52.3015V32.7616C137.381 32.0519 135.94 31.697 134.262 31.697H134.259ZM55.9047 30.8974C54.4643 30.8974 53.2201 31.1348 52.1696 31.6071C51.1191 32.0818 50.2647 32.6901 49.6017 33.4275C48.9502 34.1553 48.4469 35.0002 48.1194 35.9161C47.7926 36.8169 47.5953 37.7585 47.5335 38.7134L62.9266 36.2248C62.7469 35.0428 62.0862 33.8584 60.947 32.674C59.8078 31.4896 58.1271 30.8974 55.9047 30.8974ZM6.75114 11.7123C9.3937 11.7123 11.448 12.1732 12.9187 13.0903C14.3894 14.0074 15.1247 15.9475 15.1247 18.9062V24.5907H26.9182C27.2777 25.2428 27.6232 26.0562 27.9523 27.0332C28.2838 28.0102 28.4472 29.0909 28.4472 30.2753C28.4472 32.3491 27.9827 33.8423 27.0536 34.7617C26.1222 35.6787 24.8779 36.1373 23.3185 36.1373H15.1247C5.04001 36.1373 0 30.5841 0 19.4776V12.6018C0.660641 12.4244 1.60608 12.2331 2.83632 12.0257C4.12998 11.8126 5.43959 11.7077 6.75114 11.7123ZM92.9799 0.0390625C95.277 0.0390625 97.1259 0.741856 98.5195 2.14514C99.9155 3.55072 100.613 5.2766 100.613 7.32968C100.613 9.38045 99.9155 11.1086 98.5195 12.5119C97.1259 13.9152 95.277 14.618 92.9799 14.618C90.6805 14.618 88.834 13.9152 87.438 12.5119C86.042 11.1063 85.344 9.37815 85.344 7.32737C85.344 5.2766 86.0444 3.54842 87.438 2.14283C88.834 0.74416 90.6829 0.0390625 92.9799 0.0390625Z'
									fill='#275AC5'
								/>
								<path
									opacity='0.7'
									d='M191.183 38.3567C193.58 38.3567 195.523 36.4038 195.523 33.9947C195.523 31.5857 193.58 29.6328 191.183 29.6328C188.787 29.6328 186.844 31.5857 186.844 33.9947C186.844 36.4038 188.787 38.3567 191.183 38.3567Z'
									fill='#2D2D2D'
								/>
								<path
									opacity='0.7'
									d='M200.021 28.2277C203.394 28.2277 206.128 25.5289 206.128 22.1998C206.128 18.8707 203.394 16.1719 200.021 16.1719C196.648 16.1719 193.914 18.8707 193.914 22.1998C193.914 25.5289 196.648 28.2277 200.021 28.2277Z'
									fill='#2D2D2D'
								/>
							</svg>
						</div>
					</div>

					<div className={s.PaymentSoftware_List}>
						{software_list?.map((item, index) => {
							return (
								<div className={s.SoftwareItem} key={index}>
									<div className={s.SoftwareItem_Label}>
										<BaseCheckbox
											id={item.id.toString()}
											checked={item.checked}
											onChange={() => {
												item.checked = !item.checked;
												setSelected([...selected]);
											}}
											className={s.SoftwareItem_Label_Checkbox}
										></BaseCheckbox>
										<div className={s.SoftwareItem_Label_Title}>
											{item.name}
										</div>
									</div>

									<div className={s.SoftwareItem_Value}>
										£&nbsp;{item.price}
									</div>
								</div>
							);
						})}
					</div>

					<PricingInsideNavbar
						label_prev_link='Compliance software'
						label_next_link='Support services'
						prev_link='/pricing-information/compliance-software'
						next_link='/pricing-information/support-services'
					/>
				</div>
			</BaseContainer>
		</>
	);
};

export default PaymentSoftware;
