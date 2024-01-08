import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    secondName: z.lazy(() => SortOrderSchema).optional(),
    thirdName: z.lazy(() => SortOrderSchema).optional(),
    fourthName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    searchName: z.lazy(() => SortOrderSchema).optional(),
    birthDate: z.lazy(() => SortOrderSchema).optional(),
    genderId: z.lazy(() => SortOrderSchema).optional(),
    nationality: z.lazy(() => SortOrderSchema).optional(),
    nationalID: z.lazy(() => SortOrderSchema).optional(),
    residence: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z.lazy(() => SortOrderSchema).optional(),
    subscriberId: z.lazy(() => SortOrderSchema).optional(),
    legacyCode: z.lazy(() => SortOrderSchema).optional(),
    relationshipId: z.lazy(() => SortOrderSchema).optional(),
    isFingerprintVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    isIdCardVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    isFaceVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    isVoiceVerificationActive: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SubscriberGroupCountOrderByAggregateInputObjectSchema = Schema;
