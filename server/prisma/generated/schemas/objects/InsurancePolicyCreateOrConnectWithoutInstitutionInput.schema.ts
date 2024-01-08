import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateWithoutInstitutionInputObjectSchema } from './InsurancePolicyCreateWithoutInstitutionInput.schema';
import { InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateOrConnectWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => InsurancePolicyCreateWithoutInstitutionInputObjectSchema),
        z.lazy(
          () =>
            InsurancePolicyUncheckedCreateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyCreateOrConnectWithoutInstitutionInputObjectSchema =
  Schema;
