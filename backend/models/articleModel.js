import mongoose, { Schema } from "mongoose";

const ArticleSchema = new Schema({
	title: { type: String, required: true },
	description: [
		{
			subtitle: { type: String },
			text: { type: String, required: true }
		}
	],
	tags: {
		type: [String],
		set: tags => [...new Set(tags)]
	}
});

export const Article = mongoose.model("Article", ArticleSchema);