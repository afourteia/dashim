import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUpdateWithoutInstitutionInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutInstitutionInput.schema';
import { InsurancePolicyCreateWithoutInstitutionInputObjectSchema } from './InsurancePolicyCreateWithoutInstitutionInput.schema';
import { InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpsertWithWhereUniqueWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => InsurancePolicyUpdateWithoutInstitutionInputObjectSchema),
        z.lazy(
          () =>
            InsurancePolicyUncheckedUpdateWithoutInstitutionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => InsurancePolicyCreateWithoutInstitutionInputObjectSchema),
        z.lazy(
          () =>
            InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema =
  Schema;
