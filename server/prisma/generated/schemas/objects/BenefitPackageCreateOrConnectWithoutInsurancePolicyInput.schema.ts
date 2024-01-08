import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
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

export const BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema =
  Schema;
