import { Hero } from "@/components"
import styles from "./_mainPage.module.scss"
import { CategoryList, EventsCarousel, LatestNews } from "@/modules";
import { EditorsBlock } from "@/modules/articles";

const MainPage: React.FC = () => {

  return (
    <div className={styles.main}>
      <Hero />
      <CategoryList title="Features" category="features" />
      <EventsCarousel title="Events" category="events" />
      <LatestNews title="Latest news" category="sort=1" />
      <EditorsBlock title="Editor's Top Picks" />
    </div>
    
  )
}

export default MainPage
