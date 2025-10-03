import { ArticleCard, EventCard, NextButton, PrevButton, usePrevNextButtons } from '@/components'
import React from 'react'
import styles from "./_eventsCarousel.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import { useArticles } from '@/shared/api'
import BaseBlock from '../baseBlock/BaseBlock'
import { useNavigate } from 'react-router'
interface EventsCarouselProps {
	title: string,
	category: string,
}
const EventsCarousel: React.FC<EventsCarouselProps> = ({ title, category }) => {
	const navigate = useNavigate()
	const [emblaRef, emblaApi] = useEmblaCarousel()

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons({ emblaApi })

	const { data: articles = [] } = useArticles({ category });

	return (
		<BaseBlock title={title} blockHref={`articles/${category}`}>
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
										onCardClick={() => navigate(`/articles/${articles[0]._id}`)}
									/>
								) : (
									<ArticleCard
										title={article.title}
										author={article.author}
										date={article.updatedAt}
										tags={article.tags}
										image={article.imageUrl}
										size="lg"
										onCardClick={() => navigate(`/articles/${articles[0]._id}`)}
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