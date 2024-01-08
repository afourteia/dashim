import { z } from 'zod';
import { BenefitPackageCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutInsurancePolicyInput.schema';
import { BenefitPackageUpsertWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpsertWithoutInsurancePolicyInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUpdateWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateOneWithoutInsurancePolicyNestedInput> =
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
      upsert: z
        .lazy(() => BenefitPackageUpsertWithoutInsurancePolicyInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => BenefitPackageUpdateWithoutInsurancePolicyInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageUpdateOneWithoutInsurancePolicyNestedInputObjectSchema =
  Schema;
