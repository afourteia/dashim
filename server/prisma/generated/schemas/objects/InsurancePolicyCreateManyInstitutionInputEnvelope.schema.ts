import { z } from 'zod';
import { InsurancePolicyCreateManyInstitutionInputObjectSchema } from './InsurancePolicyCreateManyInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateManyInstitutionInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => InsurancePolicyCreateManyInstitutionInputObjectSchema),
        z
          .lazy(() => InsurancePolicyCreateManyInstitutionInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InsurancePolicyCreateManyInstitutionInputEnvelopeObjectSchema =
  Schema;
