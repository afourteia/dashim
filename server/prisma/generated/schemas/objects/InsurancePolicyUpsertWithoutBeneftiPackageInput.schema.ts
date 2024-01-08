import { z } from 'zod';
import { InsurancePolicyUpdateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUpdateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyCreateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyCreateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpsertWithoutBeneftiPackageInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => InsurancePolicyUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedUpdateWithoutBeneftiPackageInputObjectSchema,
        ),
      ]),
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

export const InsurancePolicyUpsertWithoutBeneftiPackageInputObjectSchema =
  Schema;
