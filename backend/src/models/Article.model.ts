import { HydratedDocument, InferSchemaType, model, Schema } from 'mongoose';

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String },
    author: { type: String, required: true },
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
      type: { String },
      set: (tags: string[]) => [...new Set(tags)],
    },
  },
  { timestamps: true },
);

export type IArticle = InferSchemaType<typeof ArticleSchema>;

export type ArticleDocument = HydratedDocument<IArticle>;

export const Article = model<ArticleDocument>('Article', ArticleSchema);
