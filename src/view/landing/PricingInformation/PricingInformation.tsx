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
					<div className={s.PricingInformation}>
						<div className={s.PricingInformation_Body}>
							<p>
								With Doqins account, you can access the following key features.
								The earlier you join, the better offer you will receive to
								undertake business account and set up with us.
							</p>
							<p>
								Our offer is simple, and with no commitment, you can manage your
								bills, invoices, tax and more from one Doqins business account.
								Lorem ipsum dolor sit amet consectetur. Quis nibh posuere
								rhoncus feugiat massa.Lorem ipsum dolor sit amet consectetur.
							</p>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default PricingInformation;
