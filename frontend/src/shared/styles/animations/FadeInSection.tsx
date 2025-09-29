import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { fadeInVariants } from "./fadeIn";

export const FadeInSection: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.div
			variants={fadeInVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.4 }}
		>
			{children}
		</motion.div>
	);
};