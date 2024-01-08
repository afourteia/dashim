import { z } from 'zod';
import { InsurancePolicyScalarWhereInputObjectSchema } from './InsurancePolicyScalarWhereInput.schema';
import { InsurancePolicyUpdateManyMutationInputObjectSchema } from './InsurancePolicyUpdateManyMutationInput.schema';
import { InsurancePolicyUncheckedUpdateManyWithoutPoliciesInputObjectSchema } from './InsurancePolicyUncheckedUpdateManyWithoutPoliciesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateManyWithWhereWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(() => InsurancePolicyScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => InsurancePolicyUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            InsurancePolicyUncheckedUpdateManyWithoutPoliciesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyUpdateManyWithWhereWithoutInstitutionInputObjectSchema =
  Schema;
