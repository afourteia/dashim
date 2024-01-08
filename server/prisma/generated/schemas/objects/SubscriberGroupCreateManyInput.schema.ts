import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateManyInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    firstName: z.string(),
    secondName: z.string().optional().nullable(),
    thirdName: z.string().optional().nullable(),
    fourthName: z.string().optional().nullable(),
    lastName: z.string(),
    searchName: z.string(),
    birthDate: z.coerce.date(),
    genderId: z.string().optional().nullable(),
    nationality: z.string().optional().nullable(),
    nationalID: z.string().optional().nullable(),
    residence: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    subscriberId: z.string(),
    legacyCode: z.string().optional().nullable(),
    relationshipId: z.string(),
    isFingerprintVerificationActive: z.boolean().optional(),
    isIdCardVerificationActive: z.boolean().optional(),
    isFaceVerificationActive: z.boolean().optional(),
    isVoiceVerificationActive: z.boolean().optional(),
  })
  .strict();

export const SubscriberGroupCreateManyInputObjectSchema = Schema;
