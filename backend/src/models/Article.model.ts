import { HydratedDocument, InferSchemaType, model, Schema } from 'mongoose';
import { CATEGORIES } from '../services';

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, enum: CATEGORIES},
    author: { type: String, required: true },
    imageUrl: { type: String },
    content: {
      type: [
        {
          subtitle: { type: String },
          text: { type: String, required: true },
        },
      ],
      required: true,
    },
    tags: {
      type: [String] ,
      set: (tags: string[]) => [...new Set(tags)],
    },
    ticketLink: { type: String },
    eventDate: { type: Date },
    isEditorsPick: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export type IArticle = InferSchemaType<typeof ArticleSchema>;

export type ArticleDocument = HydratedDocument<IArticle>;

export const Article = model<ArticleDocument>('Article', ArticleSchema);
