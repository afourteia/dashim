import { z } from 'zod';
import { SubscriberScalarWhereInputObjectSchema } from './SubscriberScalarWhereInput.schema';
import { SubscriberUpdateManyMutationInputObjectSchema } from './SubscriberUpdateManyMutationInput.schema';
import { SubscriberUncheckedUpdateManyWithoutMembersInputObjectSchema } from './SubscriberUncheckedUpdateManyWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateManyWithWhereWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(() => SubscriberScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedUpdateManyWithoutMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpdateManyWithWhereWithoutInstitutionInputObjectSchema =
  Schema;
