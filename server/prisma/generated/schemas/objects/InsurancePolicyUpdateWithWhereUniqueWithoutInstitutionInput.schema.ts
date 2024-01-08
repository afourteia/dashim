import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUpdateWithoutInstitutionInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateWithWhereUniqueWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => InsurancePolicyUpdateWithoutInstitutionInputObjectSchema),
        z.lazy(
          () =>
            InsurancePolicyUncheckedUpdateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyUpdateWithWhereUniqueWithoutInstitutionInputObjectSchema =
  Schema;
