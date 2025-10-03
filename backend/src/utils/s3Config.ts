
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const getS3Client = () => new S3Client({
    region: 'ru-central1',
    endpoint: process.env.ENDPOINT_S3!,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_S3!,
        secretAccessKey: process.env.SECRET_KEY_S3!,
    },
});

export const getPresignedUrl = async (key: string, contentType: string) => {
	const s3Client = getS3Client();
	const command = new PutObjectCommand({
		Bucket: process.env.BUCKET_NAME_S3!,
		Key: key,
		ContentType: contentType,
		ACL: "public-read",
	});

	return getSignedUrl(s3Client, command, { expiresIn: 60 * 5 });
};

console.log("ENDPOINT_S3:", process.env.ENDPOINT_S3);
console.log("BUCKET_NAME_S3:", process.env.BUCKET_NAME_S3);
