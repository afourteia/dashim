import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutInsurancePolicyInputObjectSchema } from './SubscriberUpdateWithoutInsurancePolicyInput.schema';
import { SubscriberUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { SubscriberCreateWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateWithoutInsurancePolicyInput.schema';
import { SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpsertWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SubscriberUpdateWithoutInsurancePolicyInputObjectSchema),
        z.lazy(
          () =>
            SubscriberUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutInsurancePolicyInputObjectSchema),
        z.lazy(
          () =>
            SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
