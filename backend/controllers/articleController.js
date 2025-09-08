import { Article } from "../models/index.js";
import mongoose from "mongoose";

class ArticleController {
	async getArticles(req, res) {
		try {
			const articles = await Article.find();
			return res.json(articles);
		} catch (err) {
			console.error("Error in getArticles:", err);
			return res.status(500).json({ message: "Server error", error: err.message });
		}
	}

	async getArticleById(req, res) {
		try {
			const { id } = req.params;

			if (!id || !mongoose.Types.ObjectId.isValid(id)) {
				return res.status(400).json({ message: "Invalid or missing id" });
			}

			const article = await Article.findById(id);

			if (!article) {
				return res.status(404).json({ message: "Article not found" });
			}

			return res.json(article);
		} catch (err) {
			console.error("Error in getArticleById:", err);
			return res.status(500).json({ message: "Server error", error: err.message });
		}
	}

	async createArticle(req, res) {
		try {
			const newArticle = req.body;

			if (!newArticle.title || !newArticle.description || !Array.isArray(newArticle.description)) {
				return res.status(400).json({ message: "Title and description are required" });
			}

			const article = await Article.create(newArticle);
			return res.status(201).json(article);
		} catch (err) {
			console.error("Error in createArticle:", err);

			if (err.code === 11000) {
				return res.status(400).json({ message: "Article with this title already exists" });
			}

			return res.status(500).json({ message: "Server error", error: err.message });
		}
	}

	async updateArticle(req, res) {
		try {
			const { id } = req.params;
			const { title, description, tags } = req.body;

			if (!id || !mongoose.Types.ObjectId.isValid(id)) {
				return res.status(400).json({ message: "Invalid or missing id" });
			}

			if (!title || !description || !Array.isArray(description)) {
				return res.status(400).json({ message: "Title and description are required" });
			}

			const article = await Article.findByIdAndUpdate(
				id,
				{ title, description, tags },
				{ new: true, runValidators: true }
			);

			if (!article) {
				return res.status(404).json({ message: "Article not found" });
			}

			return res.json({ message: "Article fully updated", article });
		} catch (err) {
			console.error("Error in updateArticle:", err);
			return res.status(500).json({ message: "Server error", error: err.message });
		}
	}

	async patchArticle(req, res) {
		try {
			const { id } = req.params;
			const updateData = req.body;

			if (!id || !mongoose.Types.ObjectId.isValid(id)) {
				return res.status(400).json({ message: "Invalid or missing id" });
			}

			if (!updateData || Object.keys(updateData).length === 0) {
				return res.status(400).json({ message: "No data provided for update" });
			}

			const article = await Article.findByIdAndUpdate(
				id,
				{ $set: updateData },
				{ new: true, runValidators: true }
			);

			if (!article) {
				return res.status(404).json({ message: "Article not found" });
			}

			return res.json({ message: "Article partially updated", article });
		} catch (err) {
			console.error("Error in patchArticle:", err);
			return res.status(500).json({ message: "Server error", error: err.message });
		}
	}

	async deleteArticle(req, res) {
		try {
			const { id } = req.params;

			if (!id || !mongoose.Types.ObjectId.isValid(id)) {
				return res.status(400).json({ message: "Invalid or missing id" });
			}

			const article = await Article.findByIdAndDelete(id);

			if (!article) {
				return res.status(404).json({ message: "Article not found" });
			}

			return res.json({ message: "Article deleted", article });
		} catch (err) {
			console.error("Error in deleteArticle:", err);
			return res.status(500).json({ message: "Server error", error: err.message });
		}
	}
}

export default new ArticleController();
