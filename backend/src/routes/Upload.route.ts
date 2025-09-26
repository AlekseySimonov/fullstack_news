import { Router } from "express";
import { uploadController } from "../controllers";

const uploadRouter = Router();

uploadRouter.post("/upload-url", uploadController.getUploadUrl);

export { uploadRouter };