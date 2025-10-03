import { Hero } from "@/components"
import styles from "./_mainPage.module.scss"
import { CategoryList, EventsCarousel, LatestNews, EditorsBlock } from "@/modules";
import { FadeInSection } from "@/shared/styles/animations";

const MainPage: React.FC = () => {

  return (
    <div className={styles.main}>
        <Hero />
        <FadeInSection>
          <CategoryList title="Features" category="features" />
        </FadeInSection>

        <FadeInSection>
          <EventsCarousel title="Events" category="events" />
        </FadeInSection>

        <FadeInSection>
          <LatestNews title="Latest news" category="sort=1" />
        </FadeInSection>

        <FadeInSection>
          <EditorsBlock title="Editor's Top Picks" />
        </FadeInSection>
    </div>
  )
}

export default MainPage
