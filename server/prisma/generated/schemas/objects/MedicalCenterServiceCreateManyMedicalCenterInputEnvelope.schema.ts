import { z } from 'zod';
import { MedicalCenterServiceCreateManyMedicalCenterInputObjectSchema } from './MedicalCenterServiceCreateManyMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateManyMedicalCenterInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => MedicalCenterServiceCreateManyMedicalCenterInputObjectSchema,
        ),
        z
          .lazy(
            () => MedicalCenterServiceCreateManyMedicalCenterInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MedicalCenterServiceCreateManyMedicalCenterInputEnvelopeObjectSchema =
  Schema;
