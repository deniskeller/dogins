import { BaseButton, BasePopup } from '@base/index';
import { countries_licensing_info } from '@services/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import s from './CountryLicensingPopup.module.scss';

interface Props {
	className?: string;
	country_id: null | number;
	popup: boolean;
	onClick: (popup: boolean) => void;
}

interface ICountrieItem {
	id: number;
	image: string;
	href: string;
	title: string;
	total_term: string;
	total_cost: string;
	roadmap: string[];
	available_licenses: string[];
	warning: string;
}

const CountryLicensingPopup: React.FC<Props> = ({
	className = '',
	popup,
	country_id,
	onClick,
}) => {
	const router = useRouter();
	const [countryItem, setCountryItem] = useState({} as ICountrieItem);

	useEffect(() => {
		//выводим инфу о стране
		const new_item = countries_licensing_info.filter((item) => {
			if (item.id == country_id) {
				return item;
			}
		});
		setCountryItem(new_item[0]);
	}, [country_id]);

	//переходим на страницу и скрролим до формы
	const requestHandler = (href: string) => {
		localStorage.setItem('item', JSON.stringify('scroll'));
		router.push('/licensing/' + href);
	};

	return (
		<BasePopup className={className} popup={popup} onClick={onClick}>
			<div
				className={s.CountryPopup}
				style={{
					backgroundImage: `url(/images/image/${
						countryItem?.image || 'germany-bg'
					}.jpeg)`,
				}}
			>
				<div className={s.CountryPopup_Header}>
					<h1>{countryItem?.title}&nbsp;licensing</h1>
				</div>

				<div className={s.CountryPopup_Parameters}>
					<div className={s.TotalTerm}>
						<div className={s.TotalTerm_Label}>
							<span>Total term</span>
						</div>
						<div className={s.TotalTerm_Value}>{countryItem?.total_term}</div>
					</div>

					<div className={s.TotalCost}>
						<div className={s.TotalCost_Label}>
							<span>Total cost</span>
						</div>
						<div className={s.TotalCost_Value}>{countryItem?.total_cost}</div>
					</div>
				</div>

				<div className={s.CountryPopup_Body}>
					<div className={s.Roadmap}>
						<div className={s.Roadmap_Title}>
							<span>Roadmap:</span>
						</div>
						<ul className={s.Roadmap_List}>
							{countryItem?.roadmap?.map((item, index) => {
								return (
									<li key={index}>
										<span>{item}</span>
									</li>
								);
							})}
						</ul>
					</div>

					<div className={s.Roadmap}>
						<div className={s.Roadmap_Title}>
							<span>Available licenses:</span>
						</div>
						<ul className={s.Roadmap_List}>
							{countryItem?.available_licenses?.map((item, index) => {
								return (
									<li key={index}>
										<span>{item}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<div className={s.CountryPopup_Warning}>
					<p>{countryItem?.warning}</p>
				</div>

				<Link href={'/licensing/' + `${countryItem?.href}`}>
					<a href='' className={s.CountryPopup_Learmore}>
						<span>Learn more</span>
					</a>
				</Link>

				<BaseButton
					title='Request'
					className={s.CountryPopup_Button}
					onClick={() => requestHandler(countryItem?.href)}
				/>
			</div>
		</BasePopup>
	);
};

export default CountryLicensingPopup;
