import React from 'react';
import s from './About.module.scss';

type Props = {};

const About: React.FC<Props> = () => {
	return (
		<>
			<div className={s.About}>
				<div className={s.About_Header}>
					<p>
						If you are interested to become the part of our family, you are
						welcomed to send the information about you below.
					</p>
				</div>

				<div className={s.About_Body}>
					<div className={s.About_Body_Columns}>
						<p>
							Please note that we are interested in self-organised persons who
							can work remotely and at the office with opportunity to be
							available 24/7 for our customers. Who have strong background and
							professional education.
						</p>
					</div>

					<div className={s.About_Body_Columns}>
						<p>
							From our side we will offer high annual income, professional
							remote infrastructure and the best offices to work worldwide.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
