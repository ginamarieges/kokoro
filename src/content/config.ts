import { defineCollection, z } from "astro:content";

const faqs = defineCollection({
  schema: z.object({
    question: z.string(),
  }),
});

export const collections = { faqs };
