import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    firstName: z.literal(true).optional(),
    secondName: z.literal(true).optional(),
    thirdName: z.literal(true).optional(),
    fourthName: z.literal(true).optional(),
    lastName: z.literal(true).optional(),
    searchName: z.literal(true).optional(),
    birthDate: z.literal(true).optional(),
    genderId: z.literal(true).optional(),
    nationality: z.literal(true).optional(),
    nationalID: z.literal(true).optional(),
    residence: z.literal(true).optional(),
    address: z.literal(true).optional(),
    isActive: z.literal(true).optional(),
    deactivationReason: z.literal(true).optional(),
    subscriberId: z.literal(true).optional(),
    legacyCode: z.literal(true).optional(),
    relationshipId: z.literal(true).optional(),
    isFingerprintVerificationActive: z.literal(true).optional(),
    isIdCardVerificationActive: z.literal(true).optional(),
    isFaceVerificationActive: z.literal(true).optional(),
    isVoiceVerificationActive: z.literal(true).optional(),
  })
  .strict();

export const SubscriberGroupMaxAggregateInputObjectSchema = Schema;
