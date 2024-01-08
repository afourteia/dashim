import { z } from 'zod';
import { UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutGenderInput.schema';
import { SubscriberGroupUncheckedCreateNestedManyWithoutGenderInputObjectSchema } from './SubscriberGroupUncheckedCreateNestedManyWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderUncheckedCreateInput> = z
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
      .lazy(() => UserUncheckedCreateNestedManyWithoutGenderInputObjectSchema)
      .optional(),
    subscriberGroup: z
      .lazy(
        () =>
          SubscriberGroupUncheckedCreateNestedManyWithoutGenderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const GenderUncheckedCreateInputObjectSchema = Schema;
