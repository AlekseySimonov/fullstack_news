import { ArticleCard, EventCard, NextButton, PrevButton, usePrevNextButtons } from '@/components'
import React from 'react'
import styles from "./_eventsCarousel.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import { useArticles } from '../../api'
import BaseBlock from '../baseBlock/BaseBlock'
interface EventsCarouselProps {
	title: string,
	category: string,
}
const EventsCarousel: React.FC<EventsCarouselProps> = ({ title, category }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel()

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons({ emblaApi })

	const { data: articles = [] } = useArticles({ category });

	return (
		<BaseBlock title={title}>
			<section className={styles.embla}>
				<div className={styles.embla__viewport} ref={emblaRef}>
					<div className={styles.embla__container}>
						{articles.map((article, index) => (
							<div
								key={article._id}
								className={styles.embla__slide}
							>
								{index === 0 ? (
									<EventCard
										title={article.title}
										place={article.author}
										date={article.updatedAt}
										tags={article.tags}
										ticketLink={article.ticketLink}
									/>
								) : (
									<ArticleCard
										title={article.title}
										author={article.author}
										date={article.updatedAt}
										tags={article.tags}
										image={article.imageUrl}
										size="lg"
									/>
								)}
							</div>
						))}
					</div>
					<div className={styles.embla__controls}>
						<div className={styles.embla__buttons}>
							<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
							<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
						</div>
					</div>
				</div>
			</section>
		</BaseBlock>
	)
}

export default EventsCarousel