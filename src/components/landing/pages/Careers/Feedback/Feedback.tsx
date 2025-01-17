import BaseSelect from '@base/BaseSelect/BaseSelect';
import { BaseButton, BaseInput, BaseTextarea } from '@base/index';
import { FileInput, PhoneInput, SubmitForm } from '@content/landing/index';
import React, { useState } from 'react';
import s from './Feedback.module.scss';

type Props = {};

const position = [
	{ value: '1', label: 'Test 1' },
	{ value: '2', label: 'Test 2' },
	{ value: '3', label: 'Test 3' },
	{ value: '4', label: 'Test 4' },
];

interface IValue {
	name_surname: string;
	email: string;
	message: string;
	position: string;
	phone: string;
	linkedin: string;
	files: File[];
}

const Feedback: React.FC<Props> = () => {
	const [value, setValue] = React.useState<IValue>({
		name_surname: '',
		email: '',
		message: '',
		position: '',
		phone: '',
		linkedin: '',
		files: [],
	});

	const setNewValue = (val: string | number | File[], key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const [submit, setSubmit] = useState(false);

	return (
		<>
			<div className={s.Feedback}>
				<div className={s.Feedback_Logo}>
					<div className={s.Feedback_Logo_Title}>
						<span>Join the Doqins & Partners team</span>
					</div>

					<svg
						width='414'
						height='368'
						viewBox='0 0 414 368'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={s.Feedback_Logo_Image}
					>
						<rect
							x='134.293'
							y='16.7695'
							width='279.493'
							height='351.229'
							rx='15'
							fill='#141414'
						/>
						<path
							d='M71.087 201.699L95.6668 217.375L37.1128 309.145C32.9288 315.705 24.0363 317.513 17.2526 313.178C10.4633 308.849 8.34901 300.024 12.533 293.469L71.087 201.699Z'
							fill='#141414'
						/>
						<path
							d='M174.935 70.0345C165.983 64.2926 155.982 60.3814 145.509 58.5267C135.037 56.672 124.301 56.9105 113.921 59.2285C103.529 61.4966 93.6892 65.8025 84.9715 71.8974C76.2539 77.9923 68.8311 85.7552 63.1326 94.7369C39.1219 132.371 50.2012 182.529 87.8351 206.54C125.463 230.556 175.616 219.482 199.643 181.843C205.389 172.891 209.302 162.889 211.156 152.415C213.01 141.941 212.768 131.203 210.444 120.823C208.177 110.43 203.871 100.59 197.776 91.8723C191.681 83.1545 183.918 75.732 174.935 70.0345ZM185.183 172.616C173.022 191.667 152.37 202.077 131.288 202.077C119.158 202.088 107.279 198.619 97.0623 192.08C67.4003 173.151 58.6752 133.615 77.5982 103.964C82.0879 96.8844 87.9375 90.7658 94.8082 85.9624C101.679 81.1591 109.434 77.7666 117.625 75.9814C125.806 74.1511 134.268 73.9616 142.523 75.4238C150.777 76.8861 158.66 79.971 165.714 84.5C172.794 88.9883 178.914 94.8367 183.718 101.707C188.522 108.576 191.916 116.331 193.702 124.522C195.532 132.703 195.721 141.166 194.258 149.422C192.796 157.677 189.712 165.56 185.183 172.616Z'
							fill='#141414'
						/>
						<rect
							x='119.457'
							y='1'
							width='277.493'
							height='349.229'
							rx='14'
							fill='#222222'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<mask
							id='mask0_8636_177586'
							// style='mask-type:alpha'
							maskUnits='userSpaceOnUse'
							x='292'
							y='57'
							width='75'
							height='75'
						>
							<path
								d='M339.39 95.8655C347.067 98.1101 353.811 102.782 358.609 109.182C363.408 115.581 366.003 123.364 366.007 131.362H292.008C292.009 123.363 294.604 115.58 299.403 109.18C304.202 102.78 310.946 98.1085 318.625 95.8655L329.007 111.439L339.39 95.8655ZM347.507 75.863C347.507 80.7695 345.558 85.475 342.089 88.9443C338.619 92.4137 333.914 94.3628 329.007 94.3628C324.101 94.3628 319.395 92.4137 315.926 88.9443C312.457 85.475 310.508 80.7695 310.508 75.863C310.508 70.9566 312.457 66.2511 315.926 62.7817C319.395 59.3124 324.101 57.3633 329.007 57.3633C333.914 57.3633 338.619 59.3124 342.089 62.7817C345.558 66.2511 347.507 70.9566 347.507 75.863Z'
								fill='#2D2D2D'
							/>
						</mask>
						<g mask='url(#mask0_8636_177586)'>
							<circle cx='329.008' cy='79.1876' r='52.172' fill='#B49635' />
						</g>
						<circle
							cx='329.006'
							cy='79.1915'
							r='51.172'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<rect
							x='139.02'
							y='49.9102'
							width='119.579'
							height='9.17971'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<path
							d='M182.271 77.3281H258.899V86.8775H188.094'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<path
							d='M182.271 104.809H258.899V114.358H188.094'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<path
							d='M170.395 73.5977H135.691V90.3672H182.041'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<path
							d='M185.024 100.621H135.691V117.391H200.441'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<rect
							x='217.744'
							y='150.996'
							width='162.435'
							height='9.17971'
							fill='#9F9F9F'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<rect
							x='260.598'
							y='188.727'
							width='119.579'
							height='9.17971'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<rect
							x='260.598'
							y='212.949'
							width='119.579'
							height='9.17971'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<rect
							x='260.598'
							y='237.172'
							width='119.579'
							height='9.17971'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<rect
							x='260.598'
							y='261.395'
							width='119.579'
							height='9.17971'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<rect
							x='260.598'
							y='285.617'
							width='119.579'
							height='9.17971'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<rect
							x='260.598'
							y='309.844'
							width='119.579'
							height='9.17971'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<circle
							cx='241.896'
							cy='193.316'
							r='4.58986'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<circle
							cx='241.896'
							cy='217.539'
							r='4.58986'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<circle
							cx='241.896'
							cy='241.762'
							r='4.58986'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<circle
							cx='241.896'
							cy='265.984'
							r='4.58986'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<circle
							cx='241.896'
							cy='290.207'
							r='4.58986'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<circle
							cx='241.896'
							cy='314.434'
							r='4.58986'
							stroke='#9F9F9F'
							strokeWidth='2'
						/>
						<path
							d='M175.782 161.87C184.769 147.834 189.831 121.94 186.227 105.686C183.76 94.5493 169.895 82.1505 162.243 74.0664C166.241 88.4939 168.634 119.114 148.803 147.442C131.973 171.468 107.651 181.979 93.7676 184.565C119.898 192.429 160.385 185.901 175.782 161.87Z'
							fill='#F0F0F0'
							fillOpacity='0.2'
						/>
						<path
							d='M162.906 56.1595C153.954 50.4176 143.953 46.5064 133.48 44.6517C123.008 42.797 112.272 43.0355 101.892 45.3535C91.4995 47.6216 81.6599 51.9275 72.9422 58.0224C64.2246 64.1173 56.8018 71.8802 51.1033 80.8619C27.0926 118.496 38.1719 168.654 75.8058 192.665C113.434 216.681 163.587 205.607 187.614 167.968C193.36 159.016 197.273 149.014 199.127 138.54C200.981 128.066 200.739 117.328 198.414 106.948C196.148 96.5551 191.842 86.7151 185.747 77.9973C179.652 69.2795 171.889 61.857 162.906 56.1595ZM173.154 158.741C160.993 177.792 140.34 188.202 119.258 188.202C107.128 188.213 95.2496 184.744 85.033 178.205C55.371 159.276 46.6459 119.74 65.5689 90.0891C70.0586 83.0094 75.9082 76.8908 82.7789 72.0874C89.6497 67.2841 97.4051 63.8916 105.596 62.1064C113.777 60.2761 122.239 60.0866 130.494 61.5488C138.748 63.0111 146.63 66.096 153.684 70.625C160.765 75.1133 166.884 80.9617 171.689 87.8315C176.493 94.7013 179.886 102.456 181.673 110.647C183.502 118.828 183.691 127.291 182.229 135.547C180.767 143.802 177.682 151.685 173.154 158.741Z'
							fill='#222222'
						/>
						<path
							d='M62.5573 194.25L24.851 253.578L4.15402 286.024C-1.02733 299.991 6.26835 303.931 10.4524 306.598C14.6364 309.265 24.5776 306.659 24.5776 306.659L87.0129 209.855L62.5573 194.25Z'
							fill='#B49635'
						/>
						<path
							d='M188.192 168.33C212.45 130.313 201.296 79.8287 163.279 55.5709C125.262 31.3131 74.7782 42.4672 50.5203 80.4843C26.2625 118.501 37.4166 168.985 75.4337 193.243C113.451 217.501 163.935 206.347 188.192 168.33Z'
							stroke='#9F9F9F'
							strokeWidth='2'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M173.693 159.072C192.841 129.062 184.036 89.2113 154.027 70.0627C124.017 50.9141 84.1659 59.7189 65.0173 89.7287C45.8687 119.739 54.6735 159.589 84.6834 178.738C114.693 197.887 154.544 189.082 173.693 159.072Z'
							stroke='#9F9F9F'
							strokeWidth='2'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M62.7023 194.25L87.282 209.926L28.728 301.696C24.544 308.256 15.6515 310.064 8.86785 305.729C2.07858 301.4 -0.0357517 292.575 4.14827 286.02L62.7023 194.25Z'
							stroke='#9F9F9F'
							strokeWidth='2'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M165.297 258.535C163.409 258.535 161.774 259.461 160.289 260.743C158.802 262.025 157.432 263.748 156.221 265.948C153.792 270.354 151.994 276.533 151.994 284.242C151.994 288.193 152.903 292.265 154.733 295.515C155.134 296.227 155.79 296.699 156.298 297.329C154.939 299.005 152.698 302.139 152.698 302.139L156.301 305.769C156.301 305.769 158.784 302.32 160.369 300.408C161.376 300.842 162.325 301.432 163.499 301.432C167.793 301.432 172.272 299.54 176.409 297.173C177.738 298.2 179.235 298.909 180.79 298.909C185.936 298.909 189.846 295.863 192.606 293.153C193.407 292.364 193.945 291.783 194.561 291.102C194.551 291.793 194.531 292.424 194.719 293.232C194.864 293.842 195.032 294.602 195.658 295.283C196.284 295.962 197.408 296.386 198.317 296.386C200.145 296.386 201.201 295.538 202.308 294.73C203.412 293.923 204.461 292.957 205.593 292.048C207.869 290.234 210.297 288.814 212.085 288.814V283.767C208.114 283.767 205.014 286.134 202.538 288.105C201.366 289.038 200.31 289.858 199.489 290.469V290.153C199.516 289.237 199.654 288.21 199.489 287.08C199.39 286.393 199.12 285.742 198.705 285.188C198.187 284.448 197.022 283.767 196.046 283.767C194.636 283.767 194.118 284.378 193.62 284.792C193.119 285.205 192.748 285.629 192.29 286.131C191.371 287.138 190.275 288.352 189.08 289.523C186.977 291.592 184.503 293.161 181.804 293.545C183.594 292.096 185.395 290.655 186.657 289.051C188.319 286.941 189.551 284.792 189.551 282.268C189.551 280.85 189.376 278.907 188.299 277.066C187.222 275.224 184.906 273.674 182.04 273.674C178.96 273.674 176.151 275.201 174.451 277.618C172.748 280.033 172.024 283.126 172.024 286.762C172.024 289.237 172.583 291.286 173.354 293.07C169.874 294.917 166.266 296.383 163.497 296.383C167.73 289.987 172.024 281.274 172.024 270.677C172.024 268.482 172.044 265.888 171.321 263.503C170.958 262.31 170.382 261.099 169.365 260.112C168.344 259.128 166.844 258.535 165.297 258.535ZM165.297 263.582C165.747 263.582 165.765 263.67 165.923 263.819C166.078 263.965 166.263 264.331 166.469 265C166.869 266.332 167.017 268.577 167.017 270.677C167.017 279.616 163.221 287.443 159.428 293.31C159.34 293.158 159.203 293.151 159.115 292.992C157.813 290.696 157.002 287.355 157.002 284.242C157.002 277.31 158.644 271.938 160.602 268.391C161.579 266.617 162.585 265.318 163.497 264.528C164.405 263.738 165.179 263.582 165.297 263.582ZM182.04 278.721C183.429 278.721 183.635 279.056 183.995 279.667C184.358 280.278 184.543 281.41 184.543 282.268C184.543 282.899 184.018 284.368 182.743 285.975C181.639 287.375 179.956 288.824 178.129 290.234C177.688 289.217 177.032 288.478 177.032 286.765C177.032 283.838 177.648 281.698 178.519 280.457C179.388 279.213 180.367 278.721 182.04 278.721ZM151.994 314.046V319.092H212.085V314.046H151.994Z'
							fill='#B49635'
						/>
					</svg>
				</div>

				{!submit ? (
					<div
						className={s.Feedback_Form}
						style={{ opacity: !submit ? '1' : '0' }}
					>
						<div className={s.Feedback_Form_Title}>
							<p>
								If you are such person, please feel free to send the application
								below:
							</p>
						</div>

						<div className={s.Row}>
							<BaseInput
								name='name_surname'
								label='Name Surname'
								value={value.name_surname}
								onChange={(val: string) => setNewValue(val, 'name_surname')}
							/>
						</div>

						<div className={s.Row}>
							<BaseSelect
								label='Position'
								options={position}
								onChange={(val: string) => setNewValue(val, 'position')}
							/>
						</div>

						<div className={s.Column}>
							<BaseInput
								name='email'
								label='Email'
								value={value.email}
								onChange={(val: string) => setNewValue(val, 'email')}
							/>

							<PhoneInput
								value={value.phone}
								onChange={(val: string) => setNewValue(val, 'phone')}
							/>
						</div>

						<div className={s.Column}>
							<BaseInput
								name='linkedin'
								label='Linkedin profile'
								value={value.linkedin}
								onChange={(val: string) => setNewValue(val, 'linkedin')}
							/>

							<FileInput
								files={value.files}
								onChange={(val: File[]) => setNewValue(val, 'files')}
							/>
						</div>

						<div className={s.Row}>
							<BaseTextarea
								name='message'
								label='Tell us about yourself'
								type='text'
								value={value.message}
								onChange={(val: string) => setNewValue(val, 'message')}
							/>
						</div>

						<BaseButton
							title='Submit'
							type='submit'
							className={s.Button}
							onClick={() => setSubmit(true)}
						/>
					</div>
				) : (
					<div
						className={s.Feedback_Form_Submit}
						style={{ opacity: submit ? '1' : '0' }}
					>
						<SubmitForm />
					</div>
				)}
			</div>
		</>
	);
};

export default Feedback;
