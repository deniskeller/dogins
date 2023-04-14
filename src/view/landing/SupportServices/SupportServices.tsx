import { BaseContainer } from '@base/index';
import { PricingHeader2 } from '@content/landing/index';
import React from 'react';
import s from './SupportServices.module.scss';

const SupportServices: React.FC = () => {
	return (
		<>
			<PricingHeader2
				image='pricing-header-bg2.jpeg'
				title='Support services'
			/>

			<div className={s.Wrapper}>
				<BaseContainer className={s.BaseContainer}>
					<div className={s.SupportServices}>
						<div className={s.SupportServices_Body}>
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

export default SupportServices;
