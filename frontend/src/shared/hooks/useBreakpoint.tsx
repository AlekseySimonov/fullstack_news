import { useState, useEffect } from "react";
import { BREAKPOINTS } from "../consts";

type Breakpoint = "mobile" | "tablet" | "desktop";

export function useBreakpoint(): Breakpoint {
	const getBreakpoint = (): Breakpoint => {
		const width = window.innerWidth;
		if (width <= BREAKPOINTS.mobile) return "mobile";
		if (width <= BREAKPOINTS.tablet) return "tablet";
		return "desktop";
	};

	const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

	useEffect(() => {
		const handleResize = () => {
			setBreakpoint(getBreakpoint());
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return breakpoint;
}