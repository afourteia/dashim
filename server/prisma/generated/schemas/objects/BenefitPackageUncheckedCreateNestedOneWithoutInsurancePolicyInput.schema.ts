import { z } from 'zod';
import { BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutInsurancePolicyInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUncheckedCreateNestedOneWithoutInsurancePolicyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageUncheckedCreateNestedOneWithoutInsurancePolicyInputObjectSchema =
  Schema;
