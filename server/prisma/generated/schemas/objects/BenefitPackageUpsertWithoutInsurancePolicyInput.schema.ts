import { z } from 'zod';
import { BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpdateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpsertWithoutInsurancePolicyInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageUpsertWithoutInsurancePolicyInputObjectSchema =
  Schema;
