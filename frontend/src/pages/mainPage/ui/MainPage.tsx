import { Hero } from "@/components"
import { fetcher } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import styles from "./_mainPage.module.scss"
import { CategoryList, EventsCarousel } from "@/modules";

const MainPage: React.FC = () => {

  return (
    <div className={styles.main}>
      <Hero />
      <CategoryList title="Features" category="features" />
      <EventsCarousel title="Events" category="events"/>
    </div>
    
  )
}

export default MainPage
