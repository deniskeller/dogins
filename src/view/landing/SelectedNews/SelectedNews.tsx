import { BaseContainer, BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Header } from '@content/landing/index';
import { useRouter } from 'next/router';
import s from './SelectedNews.module.scss';

const SelectedNews = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Header
				image='news-header-bg.jpeg'
				title='Start a blog to reach your creative peak'
			/>

			<div className={s.SelectedNews}>
				<BaseContainer>
					<div className={s.Header}>
						<div className={s.Header_Item}>
							<div className={s.Header_Item_Label}>
								<span>Author</span>
							</div>
							<div className={s.Header_Item_Value}>Maxim Ivanov</div>
						</div>

						<div className={s.Header_Item}>
							<div className={s.Header_Item_Label}>
								<span>Date of publication</span>
							</div>
							<div className={s.Header_Item_Value}>12.02.2022</div>
						</div>

						<div className={s.Header_Item}>
							<div className={s.Header_Item_Label}>
								<span>Topic</span>
							</div>
							<div className={s.Header_Item_Value}>E-commers</div>
						</div>
					</div>
				</BaseContainer>

				<div className={s.Border}></div>

				<BaseContainer>
					<div className={s.Body}>
						<div className={s.Paragraph}>
							<div className={s.Paragraph_Title}>
								<h3>How Was Beck's London Tube Map Different?</h3>
							</div>
							<div className={s.Paragraph_Description}>
								<p>
									"It looks like a cross between an electric circuit diagram and
									a Mondrian painting," as BBC.com culture writer Jonathan
									Glancey observed in 2015. Instead of trying to squeeze in as
									much detail as possible, Beck actually reduced the amount of
									included information, stripping it down to the bare essentials
									that a traveler would need to know. "The map simplified the
									layout of the lines enlarging the central area in relation to
									the outlying districts and using only vertical, horizontal and
									45 degree diagonal lines," explains the website of the London
									Transport Museum. "Interchange stations were also
									highlighted." When Beck submitted his design to the board of
									the Publicity Office of the Underground Electric Railways of
									London (UERL) in 1931, it initially was rejected. But after he
									made some minor revisions, it was accepted a year later. In
									1933, 750,000 copies of Beck's map were printed and, before
									long, his modernistic diagram became the go-to resource for
									Tube travelers and is still the map used by Londoners and
									visitors today. "Beck's design presented a radical step in
									both the history of the Underground and in the visual
									communication of information, because it both met the needs of
									travelers and revolutionized the image of traveling by Tube,"
									Alexander J. Kent explains in an email. He's a reader in
									cartography and geographic information science at Canterbury
									Christ Church University in the U.K.
								</p>
							</div>
						</div>

						<div className={s.Paragraph}>
							<div className={s.Paragraph_Title}>
								<h3>Stops and Connections Make London Tube Simple</h3>
							</div>
							<div className={s.Paragraph_Description}>
								<p>
									While previous map designs had retained geographical fidelity,
									Beck understood that wasn't particularly relevant to
									travelers, to whom lines, stops and connections mattered most,
									according to Kent. Instead, "his design ruthlessly imagined
									traveling by Underground, and the problem of planning
									journeys, from a user's perspective to the extent that
									geography — usually crucial for a map — was discarded," says
									Kent. As a result, Beck's map had a major impact. "The
									positive image Beck provided encouraged more people to use the
									Underground to get around the city because it presented the
									system as a rational, efficient and thoroughly modern means of
									transport," Kent says. "However, the effect was also to change
									users' mental maps of London, not just in making the city seem
									like a functioning metropolis, but actually affecting their
									geographical understanding of the city. Distance, direction
									and existence — i.e., whether a place is on the Tube map or
									not — all get distorted and continue to do so today." Harry
									Beck was an eminent 20th-century English technical draftsman
									who believed travelers were mainly interested in knowing how
									to get from one station to another and where to change trains.
									While Beck's design was revolutionary, he didn't completely
									develop it in a vacuum. "When appraising Beck's design, it is
									crucially important to look at what came before. Hence, people
									often overestimate the novelty of Beck's design and promulgate
									the myth that his map was a single stroke of innovative genius
									that was inherently different to anything that came before,"
									Kent says. The truth is more nuanced. "Looking at the
									evolution of the design of the map, it is possible to see that
									Beck built upon the advances made by his predecessors," Kent
									says. "For example, Max Gill removed the topographic detail
									from the map, freeing the depiction of the network from its
									geographical anchor. Fred Stingemore introduced the Johnston
									font and made the lines clearer to see as well as introducing
									more distortion. These predecessors paved the way for Beck's
									introduction of a geometric form to the map — limiting angles
									to 45 and 90 degrees — which also resonated with the Art Deco
									style and its penchant for movement."
								</p>
							</div>
						</div>

						<div className={s.Paragraph}>
							<div className={s.Paragraph_Title}>
								<h3>How Was Beck's London Tube Map Different?</h3>
							</div>
							<div className={s.Paragraph_Description}>
								<p>
									"It looks like a cross between an electric circuit diagram and
									a Mondrian painting," as BBC.com culture writer Jonathan
									Glancey observed in 2015. Instead of trying to squeeze in as
									much detail as possible, Beck actually reduced the amount of
									included information, stripping it down to the bare essentials
									that a traveler would need to know. "The map simplified the
									layout of the lines enlarging the central area in relation to
									the outlying districts and using only vertical, horizontal and
									45 degree diagonal lines," explains the website of the London
									Transport Museum. "Interchange stations were also
									highlighted."
								</p>
							</div>
						</div>
					</div>
				</BaseContainer>

				<BaseContainer>
					<div className={s.Footer}>
						<div className={s.PrevBtn}>
							<div className={s.Filter}></div>
							<BaseIcon
								icon={ALL_ICONS.CHEVERON}
								viewBox='0 0 30 30'
								className={s.Icon}
							/>

							<span>Previous</span>
						</div>

						<div className={s.NextBtn}>
							<div className={s.Filter}></div>

							<span>Next</span>

							<BaseIcon
								icon={ALL_ICONS.CHEVERON}
								viewBox='0 0 30 30'
								className={s.Icon}
							/>
						</div>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default SelectedNews;
