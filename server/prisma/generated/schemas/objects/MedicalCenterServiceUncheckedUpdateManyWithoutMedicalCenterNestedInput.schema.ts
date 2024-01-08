import { z } from 'zod';
import { MedicalCenterServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceCreateOrConnectWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUpsertWithWhereUniqueWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceCreateManyMedicalCenterInputEnvelopeObjectSchema } from './MedicalCenterServiceCreateManyMedicalCenterInputEnvelope.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUpdateWithWhereUniqueWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUpdateManyWithWhereWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceScalarWhereInputObjectSchema } from './MedicalCenterServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUncheckedUpdateManyWithoutMedicalCenterNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            MedicalCenterServiceCreateManyMedicalCenterInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MedicalCenterServiceScalarWhereInputObjectSchema),
          z
            .lazy(() => MedicalCenterServiceScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterServiceUncheckedUpdateManyWithoutMedicalCenterNestedInputObjectSchema =
  Schema;
