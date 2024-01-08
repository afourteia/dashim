import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutInsurancePolicyInputObjectSchema } from './SubscriberUpdateWithoutInsurancePolicyInput.schema';
import { SubscriberUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberUpdateWithoutInsurancePolicyInputObjectSchema),
        z.lazy(
          () =>
            SubscriberUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
