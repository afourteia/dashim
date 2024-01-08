import { z } from 'zod';
import { SubscriberCreateWithoutInstitutionInputObjectSchema } from './SubscriberCreateWithoutInstitutionInput.schema';
import { SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema } from './SubscriberUncheckedCreateWithoutInstitutionInput.schema';
import { SubscriberCreateOrConnectWithoutInstitutionInputObjectSchema } from './SubscriberCreateOrConnectWithoutInstitutionInput.schema';
import { SubscriberUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema } from './SubscriberUpsertWithWhereUniqueWithoutInstitutionInput.schema';
import { SubscriberCreateManyInstitutionInputEnvelopeObjectSchema } from './SubscriberCreateManyInstitutionInputEnvelope.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema } from './SubscriberUpdateWithWhereUniqueWithoutInstitutionInput.schema';
import { SubscriberUpdateManyWithWhereWithoutInstitutionInputObjectSchema } from './SubscriberUpdateManyWithWhereWithoutInstitutionInput.schema';
import { SubscriberScalarWhereInputObjectSchema } from './SubscriberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUncheckedUpdateManyWithoutInstitutionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutInstitutionInputObjectSchema),
          z
            .lazy(() => SubscriberCreateWithoutInstitutionInputObjectSchema)
            .array(),
          z.lazy(
            () => SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriberCreateOrConnectWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberCreateOrConnectWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriberCreateManyInstitutionInputEnvelopeObjectSchema)
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
              SubscriberUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpdateManyWithWhereWithoutInstitutionInputObjectSchema,
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

export const SubscriberUncheckedUpdateManyWithoutInstitutionNestedInputObjectSchema =
  Schema;
