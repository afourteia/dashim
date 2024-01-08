import { z } from 'zod';
import { MedicalCenterServiceCreateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceCreateWithoutTemplateInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutTemplateInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutTemplateInput.schema';
import { MedicalCenterServiceCreateOrConnectWithoutTemplateInputObjectSchema } from './MedicalCenterServiceCreateOrConnectWithoutTemplateInput.schema';
import { MedicalCenterServiceCreateManyTemplateInputEnvelopeObjectSchema } from './MedicalCenterServiceCreateManyTemplateInputEnvelope.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUncheckedCreateNestedManyWithoutTemplateInput> =
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
      createMany: z
        .lazy(
          () => MedicalCenterServiceCreateManyTemplateInputEnvelopeObjectSchema,
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

export const MedicalCenterServiceUncheckedCreateNestedManyWithoutTemplateInputObjectSchema =
  Schema;
