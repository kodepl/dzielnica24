import { defineCollection, z } from "astro:content";

const notatki = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    district: z.enum(["rytm", "dom", "liczby", "okolica", "weekend"]),
    form: z.enum(["instrukcja", "analiza", "porownanie", "faq", "przewodnik"]),
    image: z.string(),
    imageAlt: z.string(),
    evergreen: z.boolean().default(false),
    readingMinutes: z.number().int().positive(),
  }),
});

export const collections = { notatki };
