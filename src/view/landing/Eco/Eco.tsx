import { BaseContainer } from '@base/index';
import { Header } from '@content/landing/index';
import s from './Eco.module.scss';

const Eco: React.FC = () => {
	return (
		<>
			<Header
				image='eco-header-bg.jpeg'
				title='Do you feel how the world is getting squeezed and accelerating?'
			/>

			<div className='Wrapper'>
				<BaseContainer>
					<div className={s.Eco}>
						<div className={s.Borders}>
							<div className={s.Borders_Item}></div>
							<div className={s.Borders_Item}></div>
							<div className={s.Borders_Item}></div>
							<div className={s.Borders_Item}></div>
						</div>

						<div className={s.Body}>
							<div className={s.Quotes}>
								<h2>
									Now we don't have time to waste energy on minutiaes like
									delayed money transfers or confusion in financial documents.
								</h2>

								<h2>
									That’s why we have created a multifunctional payment
									processing system that adapts to the needs of each merchant.
								</h2>
							</div>

							<div className={s.Text}>
								<p>
									Saving the planet has never been so easy: you use our service
									and automatically join this important mission. Use Cospay for
									your daily tasks and do a great job!
								</p>

								<p>
									Deforestation is everyone’s problem. It provokes climate
									change, environmental pollution, natural disasters and forced
									migration. We all need to start acting and heal the lungs of
									our planet.
									<br />
									<br />
									<span>
										There is nothing more important than "today", but you need
										to think about it "yesterday".
									</span>
									<br />
									<br />
									<a href=''>Join our philosophy!</a>
								</p>
							</div>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Eco;
