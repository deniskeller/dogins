import {
	Feedback,
	Header,
	Problems,
	Solutions,
	Table,
	Widget,
} from 'components/landing/pages/Compliance';

const Compliance: React.FC = () => {
	return (
		<>
			<Header />
			{/* <Widget /> */}
			<Problems />
			<Solutions />
			<Table />
			<Feedback />
		</>
	);
};

export default Compliance;
