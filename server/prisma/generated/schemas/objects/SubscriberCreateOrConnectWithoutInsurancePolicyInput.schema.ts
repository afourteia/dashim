import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberCreateWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateWithoutInsurancePolicyInput.schema';
import { SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateOrConnectWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutInsurancePolicyInputObjectSchema),
        z.lazy(
          () =>
            SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberCreateOrConnectWithoutInsurancePolicyInputObjectSchema =
  Schema;
