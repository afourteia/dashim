import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    isPublished: z.literal(true).optional(),
    isSoftDeleted: z.literal(true).optional(),
    isActive: z.literal(true).optional(),
    deactivationReason: z.literal(true).optional(),
    name: z.literal(true).optional(),
    typeId: z.literal(true).optional(),
    description: z.literal(true).optional(),
    logo: z.literal(true).optional(),
    website: z.literal(true).optional(),
    phone: z.literal(true).optional(),
    email: z.literal(true).optional(),
    address: z.literal(true).optional(),
    city: z.literal(true).optional(),
    country: z.literal(true).optional(),
    ownerId: z.literal(true).optional(),
  })
  .strict();

export const TenantMaxAggregateInputObjectSchema = Schema;
