import { z } from 'zod';
import { MedicalCenterServiceCreateManyTemplateInputObjectSchema } from './MedicalCenterServiceCreateManyTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateManyTemplateInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => MedicalCenterServiceCreateManyTemplateInputObjectSchema),
        z
          .lazy(() => MedicalCenterServiceCreateManyTemplateInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MedicalCenterServiceCreateManyTemplateInputEnvelopeObjectSchema =
  Schema;
