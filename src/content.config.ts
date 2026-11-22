import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.optional(image()),
    category: z.string().default('Thoughts'),
    tags: z.array(z.string()).default([]),
    // CMS는 선택적 URL을 빈 문자열로 저장할 수 있으므로 둘 다 수용합니다.
    relatedRepo: z.union([z.literal(''), z.string().url()]).optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    status: z.string(),
    order: z.number().default(99),
    repoUrl: z.union([z.literal(''), z.string().url()]).optional(),
    draft: z.boolean().default(false),
  }),
});

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    name: z.string(),
    englishName: z.string(),
    school: z.string(),
    major: z.string(),
    position: z.string(),
    activities: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, projects, research, pages };
