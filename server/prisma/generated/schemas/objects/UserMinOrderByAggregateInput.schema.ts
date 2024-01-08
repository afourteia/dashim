import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z.lazy(() => SortOrderSchema).optional(),
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
    username: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    isEmailVerificationActive: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    isPhoneVerified: z.lazy(() => SortOrderSchema).optional(),
    passwordHash: z.lazy(() => SortOrderSchema).optional(),
    avatar: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserMinOrderByAggregateInputObjectSchema = Schema;
