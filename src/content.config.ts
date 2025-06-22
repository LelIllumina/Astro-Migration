import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    thumb: z.string().optional(),
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

export const collections = { blogs, archive };
