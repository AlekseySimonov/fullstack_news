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

	const { data: articles } = useArticles({ category }) ?? []

	if (!articles || !articles.length) return null

	return (
		<BaseBlock title={title}>
			<section className={styles.embla}>
				<div className={styles.embla__viewport} ref={emblaRef}>
					<div className={styles.embla__container}>
						<div className={styles.embla__slide}>
							<EventCard
								key={articles[0]._id}
								title={articles[0].title}
								place={articles[0].author}
								date={articles[0].updatedAt}
								tags={articles[0].tags}
								ticketLink={articles[0].ticketLink}
							/>
						</div>

						{articles.slice(1).map(article => (
							<div className={styles.embla__slide}>
								<ArticleCard
									key={article._id}
									title={article.title}
									author={article.author}
									date={article.updatedAt}
									tags={article.tags}
									size="lg"
								/>
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