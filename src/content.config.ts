import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      thumb: image(),
      tags: z.array(z.string()),
      keywords: z.array(z.string()).optional(),
      draft: z.boolean(),
    }),
});
const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      thumb: image(),
      tags: z.array(z.string()),
      keywords: z.array(z.string()).optional(),
      draft: z.boolean(),
    }),
});
const archive = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/archive",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    thumb: z.string().optional(),
  }),
});

export const collections = { blogs, guides, archive };
