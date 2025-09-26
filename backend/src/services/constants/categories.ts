import { ValueOf } from "../../types";

export const CATEGORIES = [
	"features",
	"pop culture",
	"design",
	"fashion",
	"music",
	"events",
] as const;

export type CATEGORIES = ValueOf<typeof CATEGORIES>
