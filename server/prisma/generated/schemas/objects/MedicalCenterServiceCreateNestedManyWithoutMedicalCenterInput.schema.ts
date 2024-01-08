import { z } from 'zod';
import { MedicalCenterServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './MedicalCenterServiceCreateOrConnectWithoutMedicalCenterInput.schema';
import { MedicalCenterServiceCreateManyMedicalCenterInputEnvelopeObjectSchema } from './MedicalCenterServiceCreateManyMedicalCenterInputEnvelope.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateNestedManyWithoutMedicalCenterInput> =
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
      createMany: z
        .lazy(
          () =>
            MedicalCenterServiceCreateManyMedicalCenterInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
          z
            .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterServiceCreateNestedManyWithoutMedicalCenterInputObjectSchema =
  Schema;
