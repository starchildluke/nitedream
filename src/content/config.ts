import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		image: z.string().optional(),
		published: z.boolean().optional(),
		tags: z.array(z.string()).optional(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val))
	})
});

export const collections = { 'blog': posts };
