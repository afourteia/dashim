import { z } from 'zod';
import { MedicalCenterServiceCreateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceCreateWithoutTemplateInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutTemplateInput.schema';
import { MedicalCenterServiceCreateOrConnectWithoutTemplateInputObjectSchema } from './MedicalCenterServiceCreateOrConnectWithoutTemplateInput.schema';
import { MedicalCenterServiceUpsertWithWhereUniqueWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUpsertWithWhereUniqueWithoutTemplateInput.schema';
import { MedicalCenterServiceCreateManyTemplateInputEnvelopeObjectSchema } from './MedicalCenterServiceCreateManyTemplateInputEnvelope.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceUpdateWithWhereUniqueWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUpdateWithWhereUniqueWithoutTemplateInput.schema';
import { MedicalCenterServiceUpdateManyWithWhereWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUpdateManyWithWhereWithoutTemplateInput.schema';
import { MedicalCenterServiceScalarWhereInputObjectSchema } from './MedicalCenterServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUncheckedUpdateManyWithoutTemplateNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalCenterServiceCreateWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () => MedicalCenterServiceCreateWithoutTemplateInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              MedicalCenterServiceUncheckedCreateWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceUncheckedCreateWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceCreateOrConnectWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceCreateOrConnectWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceUpsertWithWhereUniqueWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceUpsertWithWhereUniqueWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => MedicalCenterServiceCreateManyTemplateInputEnvelopeObjectSchema,
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
              MedicalCenterServiceUpdateWithWhereUniqueWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceUpdateWithWhereUniqueWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceUpdateManyWithWhereWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalCenterServiceUpdateManyWithWhereWithoutTemplateInputObjectSchema,
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

export const MedicalCenterServiceUncheckedUpdateManyWithoutTemplateNestedInputObjectSchema =
  Schema;
