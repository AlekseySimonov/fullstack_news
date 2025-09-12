import { useRef } from "react";
import styles from "./hero.module.scss"
import { useAnimateText } from "./useAnimateText";

const Hero: React.FC = () => {
	const root = useRef<HTMLDivElement>(null);

	useAnimateText(root);

	return (
		<div className={styles.hero} ref={root}>
			<div className={styles.hero__line}>
				<h1 >EMPOWERING</h1>
				<p data-hero-subtext className={styles.hero__subtext}>
					EXPLORE THE STORIES THAT SHAPE CULTURE, REDEFINE CREATIVITY AND IGNITE
					CONVERSATIONS. NWWW IS WHERE TODAY'S VOICES CONNECT AND THRIVE.
				</p>
			</div>


			<div className={styles.hero__line}>
				<div>A</div>
				<div className={styles.hero__outlined}>NEWWW</div>
				<span>GENERATION</span>
			</div>

			<div className={styles.hero__line}>
				<p data-hero-subtext className={styles.hero__subtext}>
					FROM THE LATEST TRENDS TO IMMERSIVE DESIGNS AND EVENTS
				</p>
				<h1>CREATIVE THINKERS</h1>
			</div>
		</div>
	);
}

export default Hero
