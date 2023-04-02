import { BaseButton } from '@base/index';
import { VacancyItem } from '@content/landing/index';
import React from 'react';
import s from './Vacancies.module.scss';

type Props = {};

const vacancies = [
	{
		type: 'Design and Product',
		vacancies_list: [
			{
				title: 'UX/UI Designer',
				employment_type: 'Full time',
				experience: '2+ years',
				about_the_role:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. We have interesting tasks for various skill levels and will support your growth and development in a friendly and result-oriented environment.',
				responsibilities:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. ',
				requirements:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. ',
			},
			{
				title: 'UX/UI Designer22',
				employment_type: 'Full time',
				experience: '2+ years',
				about_the_role:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. We have interesting tasks for various skill levels and will support your growth and development in a friendly and result-oriented environment.',
				responsibilities:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. ',
				requirements:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. ',
			},
		],
	},
	{
		type: 'Frontend',
		vacancies_list: [
			{
				title: 'Junior Backend Developer',
				employment_type: 'Full time',
				experience: '2+ years',
				about_the_role:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. We have interesting tasks for various skill levels and will support your growth and development in a friendly and result-oriented environment.',
				responsibilities:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. ',
				requirements:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. ',
			},
			{
				title: 'Junior Backend Developer1111',
				employment_type: 'Full time',
				experience: '2+ years',
				about_the_role:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. We have interesting tasks for various skill levels and will support your growth and development in a friendly and result-oriented environment.',
				responsibilities:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. ',
				requirements:
					'We are looking for a team-mate to help us develop front-end for the inspiring, animated, technically and creatively cutting-edge websites we produce. We want you to share our passion for developing clean and reusable code for the award-winning websites with a stack that focuses on high-end an animations and maintainability, based on JQuery, ES6, CSS. ',
			},
		],
	},
];

const Vacancies: React.FC<Props> = () => {
	const tabs = [
		{ id: 1, title: 'All' },
		{ id: 2, title: 'Design' },
		{ id: 3, title: 'Software development' },
		{ id: 4, title: 'Analytics' },
		{ id: 5, title: 'Administration' },
		{ id: 6, title: 'Management' },
		{ id: 7, title: 'Law' },
		{ id: 8, title: 'Other' },
	];

	const [tab, setTab] = React.useState(0);

	const backgroundComputed = (type: string) => {
		if (type == 'Frontend') {
			return '#B49635';
		}
		if (type == 'Design and Product') {
			return '#14422C';
		}
		return 'body2';
	};

	return (
		<>
			<div className={s.Vacancies}>
				<div className={s.Tabs}>
					<ul className={s.Tabs_TabList}>
						{tabs.map((item, index) => (
							<li
								onClick={() => setTab(index)}
								className={`${s.TabItem} ${tab === index ? s.Active : ''}`}
								key={item.id}
							>
								<span>{item.title}</span>
							</li>
						))}
					</ul>

					<ul className={s.Tabs_TabContent}>
						<li
							className={`${s.Tabs_TabContent_TabItem} ${
								tab === 0 ? s.Active : ''
							}`}
						>
							{vacancies?.map((item, index) => {
								return (
									<div className={s.Section} key={index}>
										<div
											className={s.Section_Title}
											style={{
												backgroundColor: backgroundComputed(item.type),
											}}
										>
											<span>{item.type}</span>
										</div>

										<ul className={s.Section_List}>
											{item.vacancies_list.map((el, i) => {
												return (
													<li className={s.Section_List_Item} key={i}>
														<VacancyItem title={el.title}>
															<div className={s.VacancyItem}>
																<div className={s.VacancyItem_Header}>
																	<div className={s.EmploymentType}>
																		<div className={s.EmploymentType_Label}>
																			<span>Employment type</span>
																		</div>
																		<div className={s.EmploymentType_Value}>
																			{el.employment_type}
																		</div>
																	</div>

																	<div className={s.Experience}>
																		<div className={s.Experience_Label}>
																			<span>Experience</span>
																		</div>
																		<div className={s.Experience_Value}>
																			{el.experience}
																		</div>
																	</div>
																</div>

																<div className={s.VacancyItem_Body}>
																	<div className={s.VacancyItem_Body_Row}>
																		<div className={s.Title}>
																			<span>About the role</span>
																		</div>

																		<p className={s.Description}>
																			{el.about_the_role}
																		</p>
																	</div>

																	<div className={s.VacancyItem_Body_Row}>
																		<div className={s.Title}>
																			<span>What you`ll be doing </span>
																		</div>

																		<p className={s.Description}>
																			{el.responsibilities}
																		</p>
																	</div>

																	<div className={s.VacancyItem_Body_Row}>
																		<div className={s.Title}>
																			<span>What you`ll need</span>
																		</div>

																		<p className={s.Description}>
																			{el.requirements}
																		</p>
																	</div>
																</div>

																<BaseButton title='Apply' type='submit' />
															</div>
														</VacancyItem>
													</li>
												);
											})}
										</ul>
									</div>
								);
							})}
						</li>

						<li
							className={`${s.Tabs_TabContent_TabItem} ${
								tab === 1 ? s.Active : ''
							}`}
						>
							<h1>Tab 2</h1>
						</li>

						<li
							className={`${s.Tabs_TabContent_TabItem} ${
								tab === 2 ? s.Active : ''
							}`}
						>
							<h1>Tab 3</h1>
						</li>

						<li
							className={`${s.Tabs_TabContent_TabItem} ${
								tab === 3 ? s.Active : ''
							}`}
						>
							<h1>Tab 4</h1>
						</li>

						<li
							className={`${s.Tabs_TabContent_TabItem} ${
								tab === 4 ? s.Active : ''
							}`}
						>
							<h1>Tab 5</h1>
						</li>

						<li
							className={`${s.Tabs_TabContent_TabItem} ${
								tab === 5 ? s.Active : ''
							}`}
						>
							<h1>Tab 6</h1>
						</li>

						<li
							className={`${s.Tabs_TabContent_TabItem} ${
								tab === 6 ? s.Active : ''
							}`}
						>
							<h1>Tab 7</h1>
						</li>

						<li
							className={`${s.Tabs_TabContent_TabItem} ${
								tab === 7 ? s.Active : ''
							}`}
						>
							<h1>Tab 8</h1>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Vacancies;
