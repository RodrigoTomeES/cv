import { defineCollection } from 'astro:content';
import { CVSchema } from './cv/schema';

const cvCollection = defineCollection({
  type: 'data',
  schema: CVSchema
});

export const collections = {
  'cv': cvCollection
};