import { body } from "express-validator";

export const uploadRequestValidator = [
	body("contentType")
		.exists().withMessage("'contentType' field is required")
		.bail()
		.isString().withMessage("'contentType' must be a string")
		.bail()
		.matches(/^[\w-]+\/[\w-]+$/).withMessage("Invalid MIME type format"),
];
