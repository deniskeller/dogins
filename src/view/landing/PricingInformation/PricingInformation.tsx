import { BaseContainer } from '@base/index';
import { PricingHeader } from '@content/landing/index';
import { useRouter } from 'next/router';
import React from 'react';
import s from './PricingInformation.module.scss';

const PricingInformation: React.FC = () => {
	const router = useRouter();

	return (
		<>
			<PricingHeader
				image='pricing-header-bg.jpeg'
				title='Pricing Information'
			/>

			<div className={s.Wrapper}>
				<BaseContainer className={s.BaseContainer}>
					<div className={s.Body}>
						<h1>Pricing page</h1>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default PricingInformation;
