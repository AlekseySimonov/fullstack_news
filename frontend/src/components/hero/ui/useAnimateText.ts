import { useEffect, useRef } from "react";
import { createScope, createTimeline, Scope, stagger } from "animejs";
import styles from "./hero.module.scss";

export const useAnimateText = (root: React.RefObject<HTMLDivElement | null>) => {
	const scope = useRef<Scope | null>(null);;
	useEffect(() => {
		if (!root.current) return;
		const targets = root.current.querySelectorAll("p, h1, span");
		scope.current = createScope({ root:root.current }).add(self => {
			createTimeline({
				loop: false,
				defaults: { ease: 'inOut(3)', duration: 650 }
			})
				.add(targets, {
					opacity: [$el => $el.hasAttribute('data-hero-subtext') ? [0, 0.25] : [0, 1]],
				}, stagger(125, { from: 'random' }))
			.init()
		})

		return () => scope.current?.revert()
	}, [root]);
};
