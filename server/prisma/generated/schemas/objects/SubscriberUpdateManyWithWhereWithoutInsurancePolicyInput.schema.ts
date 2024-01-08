import { z } from 'zod';
import { SubscriberScalarWhereInputObjectSchema } from './SubscriberScalarWhereInput.schema';
import { SubscriberUpdateManyMutationInputObjectSchema } from './SubscriberUpdateManyMutationInput.schema';
import { SubscriberUncheckedUpdateManyWithoutSubscribersInputObjectSchema } from './SubscriberUncheckedUpdateManyWithoutSubscribersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateManyWithWhereWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => SubscriberScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            SubscriberUncheckedUpdateManyWithoutSubscribersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema =
  Schema;
