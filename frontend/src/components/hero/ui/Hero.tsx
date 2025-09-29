import styles from "./hero.module.scss";
import { motion } from 'framer-motion';
import { containerVariants, textVariants } from "./textAnimation";

const Hero: React.FC = () => {
	return (
		<motion.div
			className={styles.hero}
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<div className={styles.hero__line}>
				<motion.h1 variants={textVariants} custom={false}>
					EMPOWERING
				</motion.h1>
				<motion.p
					variants={textVariants}
					custom={true}
					className={styles.hero__subtext}
				>
					EXPLORE THE STORIES THAT SHAPE CULTURE, REDEFINE CREATIVITY AND IGNITE
					CONVERSATIONS. NWWW IS WHERE TODAY'S VOICES CONNECT AND THRIVE.
				</motion.p>
			</div>

			<div className={styles.hero__line}>
				<motion.div variants={textVariants} custom={false}>
					A
				</motion.div>
				<motion.div
					variants={textVariants}
					custom={false}
					className={styles.hero__outlined}
				>
					NEWWW
				</motion.div>
				<motion.span variants={textVariants} custom={false}>
					GENERATION
				</motion.span>
			</div>

			<div className={styles.hero__line}>
				<motion.p
					variants={textVariants}
					custom={true}
					className={styles.hero__subtext}
				>
					FROM THE LATEST TRENDS TO IMMERSIVE DESIGNS AND EVENTS
				</motion.p>
				<motion.h1 variants={textVariants} custom={false}>
					CREATIVE THINKERS
				</motion.h1>
			</div>
		</motion.div>
	);
};

export default Hero;
