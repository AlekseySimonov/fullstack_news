import { Variants } from "framer-motion";

export const textVariants: Variants = {
	hidden: (isSubtext: boolean) => ({
		opacity: 0,
	}),
	visible: (isSubtext: boolean) => ({
		opacity: isSubtext ? 0.25 : 1,
		transition: { duration: 0.65, ease: [0.42, 0, 0.58, 1] },
	}),
};

export const containerVariants: Variants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.125,
			delayChildren: 0.2,
		},
	},
};