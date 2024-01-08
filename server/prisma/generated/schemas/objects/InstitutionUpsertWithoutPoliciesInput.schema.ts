import { z } from 'zod';
import { InstitutionUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUpdateWithoutPoliciesInput.schema';
import { InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedUpdateWithoutPoliciesInput.schema';
import { InstitutionCreateWithoutPoliciesInputObjectSchema } from './InstitutionCreateWithoutPoliciesInput.schema';
import { InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema } from './InstitutionUncheckedCreateWithoutPoliciesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpsertWithoutPoliciesInput> = z
  .object({
    update: z.union([
      z.lazy(() => InstitutionUpdateWithoutPoliciesInputObjectSchema),
      z.lazy(() => InstitutionUncheckedUpdateWithoutPoliciesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => InstitutionCreateWithoutPoliciesInputObjectSchema),
      z.lazy(() => InstitutionUncheckedCreateWithoutPoliciesInputObjectSchema),
    ]),
  })
  .strict();

export const InstitutionUpsertWithoutPoliciesInputObjectSchema = Schema;
