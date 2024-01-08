import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyCreateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateOrConnectWithoutBeneftiPackageInput> =
  z
    .object({
      where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => InsurancePolicyCreateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyCreateOrConnectWithoutBeneftiPackageInputObjectSchema =
  Schema;
