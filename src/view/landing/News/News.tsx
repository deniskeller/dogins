import { BaseButton, BaseContainer, BaseTitle } from '@base/index';
import { mock_news } from '@services/index';
import Image from 'next/image';
import { useRouter } from 'next/router';
import s from './News.module.scss';

const News = () => {
	const router = useRouter();
	const goToNews = (id: number) => {
		router.push('/news-and-insights/' + id);
	};

	return (
		<div className={s.Wrapper}>
			<BaseContainer>
				<BaseTitle className={s.Title}>News Room</BaseTitle>
			</BaseContainer>

			<BaseContainer className={s.BaseContainer}>
				<div className={s.Border}></div>
			</BaseContainer>

			<BaseContainer>
				<div className={s.News}>
					{mock_news?.map((item) => {
						return (
							<div
								className={s.NewsItem}
								key={item.id}
								onClick={() => goToNews(item.id)}
							>
								<div className={s.NewsItem_Image}>
									<Image
										src={item.image || '/images/image/main-header-bg.jpeg'}
										layout='fill'
										alt={'News & Insights'}
										priority
									/>
								</div>

								<div className={s.NewsItem_Body}>
									<div className={s.NewsItem_Title}>
										<span>{item.title}</span>
									</div>

									<div className={s.NewsItem_Description}>
										<p>{item.description}</p>
									</div>

									<div className={s.NewsItem_Info}>
										<div className={s.NewsItem_Info_Date}>{item.date}</div>

										<div className={s.NewsItem_Info_Author}>{item.read}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<BaseButton title='Show more' className={s.Button} />
			</BaseContainer>
		</div>
	);
};

export default News;
