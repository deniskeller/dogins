import { PricingHeader } from '@content/landing/index';
import { Pricing } from '@layouts/index';

const PaymentSoftwarePage = () => {
	return (
		<Pricing type='white'>
			<>
				<PricingHeader
					image='pricing-header-bg.jpeg'
					title='Payment Software'
				/>
				<h1>Payment Software page</h1>
			</>
		</Pricing>
	);
};

export default PaymentSoftwarePage;
