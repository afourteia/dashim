import { z } from 'zod';
import { SubscriberCreateWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateWithoutInsurancePolicyInput.schema';
import { SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedCreateWithoutInsurancePolicyInput.schema';
import { SubscriberCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateOrConnectWithoutInsurancePolicyInput.schema';
import { SubscriberCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './SubscriberCreateManyInsurancePolicyInputEnvelope.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateNestedManyWithoutInsurancePolicyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutInsurancePolicyInputObjectSchema),
          z
            .lazy(() => SubscriberCreateWithoutInsurancePolicyInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => SubscriberCreateManyInsurancePolicyInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema =
  Schema;
