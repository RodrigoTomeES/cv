import { z } from 'astro:content';

const ProfileSchema = z.object({
  network: z.string(),
  username: z.string(),
  url: z.string(),
});

const LocationSchema = z.object({
  address: z.string(),
  postalCode: z.string(),
  city: z.string(),
  countryCode: z.string(),
  region: z.string(),
});

const BasicsSchema = z.object({
  name: z.string(),
  label: z.string(),
  image: z.string(),
  email: z.string(),
  phone: z.string(),
  url: z.string(),
  summary: z.string(),
  location: LocationSchema,
  profiles: z.array(ProfileSchema),
});

const WorkSchema = z.array(
  z.object({
    name: z.string(),
    position: z.string(),
    url: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    summary: z.string(),
    highlights: z.array(z.string()),
  })
);

const EducationSchema = z.array(
  z.object({
    institution: z.string(),
    url: z.string(),
    area: z.string(),
    studyType: z.string(),
    startDate: z.string(),
    endDate: z.string(),
  })
);

const CertificatesSchema = z.array(
  z.object({
    name: z.string(),
    date: z.string(),
    issuer: z.string(),
    url: z.string(),
  })
);

const SkillsSchema = z.array(
  z.object({
    name: z.string(),
    level: z.string(),
    keywords: z.array(z.string()),
  })
);

const LanguagesSchema = z.array(
  z.object({
    language: z.string(),
    fluency: z.string(),
  })
);

const ProjectsSchema = z.array(
  z.object({
    name: z.string(),
    isActive: z.boolean(),
    description: z.string(),
    highlights: z.array(z.string()),
    url: z.string().nullable(),
    github: z.string().nullable(),
  })
);

export const CVSchema = z.object({
  basics: BasicsSchema,
  work: WorkSchema,
  education: EducationSchema,
  certificates: CertificatesSchema,
  skills: SkillsSchema,
  languages: LanguagesSchema,
  projects: ProjectsSchema,
});
