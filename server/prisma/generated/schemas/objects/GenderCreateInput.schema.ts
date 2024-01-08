import { z } from 'zod';
import { UserCreateNestedManyWithoutGenderInputObjectSchema } from './UserCreateNestedManyWithoutGenderInput.schema';
import { SubscriberGroupCreateNestedManyWithoutGenderInputObjectSchema } from './SubscriberGroupCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    arabic: z.string().optional().nullable(),
    english: z.string().optional().nullable(),
    name: z.string(),
    user: z
      .lazy(() => UserCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    subscriberGroup: z
      .lazy(() => SubscriberGroupCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
  })
  .strict();

export const GenderCreateInputObjectSchema = Schema;
