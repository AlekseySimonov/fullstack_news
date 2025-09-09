import { Hero } from "@/components"
import { fetcher } from "@/shared/api";
import { useQuery } from "@tanstack/react-query";
import styles from "./_mainPage.module.scss"
import { CategoryBlock } from "@/modules";

const MainPage: React.FC = () => {

  const { data: articles } = useQuery({
    queryKey: ["articles"],
    queryFn: () => fetcher("/articles/"),
  });

  return (
    <div className={styles.main}>
      <Hero />
      <CategoryBlock title="Features"/>
    </div>
    
  )
}

export default MainPage
