import { PricingHeader } from '@content/landing/index';
import { Pricing } from '@layouts/index';

const FinancialLicensingPage = () => {
	return (
		<Pricing type='white'>
			<>
				<PricingHeader
					image='pricing-header-bg.jpeg'
					title='Financial Licensing'
				/>
				<h1>Financial Licensing page</h1>
			</>
		</Pricing>
	);
};

export default FinancialLicensingPage;
