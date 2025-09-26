import { Request, Response, NextFunction } from "express";
import { randomUUID } from "crypto";
import { getPresignedUrl } from "../utils";
import { ApiError } from "../utils/ApiError";

export const uploadController = {
	async getUploadUrl(req: Request, res: Response, next: NextFunction) {
		try {
			const { contentType } = req.body;

			if (!contentType) {
				throw ApiError.badRequest("contentType обязателен");
			}

			const ext = contentType.split("/")[1] || "bin";
			const key = `uploads/${randomUUID()}.${ext}`;

			const presignedUrl = await getPresignedUrl(key, contentType);

			return res.json({
				uploadUrl: presignedUrl,
				fileUrl: `${process.env.ENDPOINT_S3}${process.env.BUCKET_NAME_S3}/${key}`,
			});
		} catch (err) {
			next(err);
		}
	},
};
