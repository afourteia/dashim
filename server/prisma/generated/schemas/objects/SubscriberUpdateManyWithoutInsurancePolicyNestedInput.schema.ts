import { z } from 'zod';
import { SubscriberCreateWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateWithoutInsurancePolicyInput.schema';
import { SubscriberUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './SubscriberUncheckedCreateWithoutInsurancePolicyInput.schema';
import { SubscriberCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateOrConnectWithoutInsurancePolicyInput.schema';
import { SubscriberUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './SubscriberUpsertWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { SubscriberCreateManyInsurancePolicyInputEnvelopeObjectSchema } from './SubscriberCreateManyInsurancePolicyInputEnvelope.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema } from './SubscriberUpdateWithWhereUniqueWithoutInsurancePolicyInput.schema';
import { SubscriberUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema } from './SubscriberUpdateManyWithWhereWithoutInsurancePolicyInput.schema';
import { SubscriberScalarWhereInputObjectSchema } from './SubscriberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateManyWithoutInsurancePolicyNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => SubscriberCreateManyInsurancePolicyInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriberUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriberScalarWhereInputObjectSchema),
          z.lazy(() => SubscriberScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberUpdateManyWithoutInsurancePolicyNestedInputObjectSchema =
  Schema;
