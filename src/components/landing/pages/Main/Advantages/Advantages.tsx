import { BaseContainer } from '@base/index';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import s from './Advantages.module.scss';

type Props = {};

const Advantages: React.FC<Props> = () => {
	return (
		<>
			<div className='Wrapper'>
				<BaseContainer className={s.BaseContainer}>
					<div className={s.Advantages}>
						<AnimationOnScroll animateIn='animate__fadeIn' animateOnce>
							<div className={s.Advantages_Item}>
								<div className={s.Advantages_Item_Number}>
									<span>01</span>
								</div>
								<div className={s.Advantages_Item_Title}>
									<span>Individual approach</span>
								</div>
								<div className={s.Advantages_Item_Subtitle}>
									Individual approach to each customer
								</div>
							</div>
						</AnimationOnScroll>

						<AnimationOnScroll
							animateIn='animate__fadeIn animate__delay-1s'
							animateOnce
						>
							<div className={s.Advantages_Item}>
								<div className={s.Advantages_Item_Number}>
									<span>02</span>
								</div>
								<div className={s.Advantages_Item_Title}>
									<span>Professional assistance</span>
								</div>
								<div className={s.Advantages_Item_Subtitle}>
									Professional assistance with the business licensing
								</div>
							</div>
						</AnimationOnScroll>

						<AnimationOnScroll
							animateIn='animate__fullWidth animate__delay-2s'
							animateOnce
						>
							<div
								className={`${s.Advantages_Item} ${s.Advantages_Item_Image}`}
							>
								<div
									className={s.Image}
									style={{
										backgroundImage: 'url(/images/image/advantages3.jpeg)',
									}}
								></div>
							</div>
						</AnimationOnScroll>

						<AnimationOnScroll
							animateIn='animate__fullWidth animate__delay-3s'
							animateOnce
						>
							<div
								className={`${s.Advantages_Item} ${s.Advantages_Item_Image}`}
							>
								<div
									className={s.Image}
									style={{
										backgroundImage: 'url(/images/image/advantages4.jpeg)',
									}}
								></div>
							</div>
						</AnimationOnScroll>

						<AnimationOnScroll
							animateIn='animate__fadeIn animate__delay-4s animate__fadeIn2'
							animateOnce
						>
							<div className={s.Advantages_Item}>
								<div className={s.Advantages_Item_Number}>
									<span>03</span>
								</div>
								<div className={s.Advantages_Item_Title}>
									<span>Set of services</span>
								</div>
								<div className={s.Advantages_Item_Subtitle}>
									Full-service support for startups, from incorporation to
									building the IT solution
								</div>
							</div>
						</AnimationOnScroll>

						<AnimationOnScroll
							animateIn='animate__fadeIn animate__delay-5s animate__fadeIn2'
							animateOnce
						>
							<div className={s.Advantages_Item}>
								<div className={s.Advantages_Item_Number}>
									<span>04</span>
								</div>
								<div className={s.Advantages_Item_Title}>
									<span>Compliance services</span>
								</div>
								<div className={s.Advantages_Item_Subtitle}>
									Complete compliance services tailored to your needs with
									modern experience
								</div>
							</div>
						</AnimationOnScroll>
					</div>
				</BaseContainer>
			</div>
		</>
	);
};

export default Advantages;
