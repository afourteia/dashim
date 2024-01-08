import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    isActive: z.literal(true).optional(),
    deactivationReason: z.literal(true).optional(),
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
    username: z.literal(true).optional(),
    email: z.literal(true).optional(),
    isEmailVerificationActive: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    isPhoneVerified: z.literal(true).optional(),
    passwordHash: z.literal(true).optional(),
    avatar: z.literal(true).optional(),
  })
  .strict();

export const UserMinAggregateInputObjectSchema = Schema;
