import { Router } from "express";
import { uploadController } from "../controllers";
import { uploadRequestValidator } from "../validators";
import { validateRequest } from "../middlewares";

const uploadRouter = Router();

uploadRouter.post(
	"/upload-url",
	uploadRequestValidator,
	validateRequest,
	uploadController.getUploadUrl
);

export { uploadRouter };