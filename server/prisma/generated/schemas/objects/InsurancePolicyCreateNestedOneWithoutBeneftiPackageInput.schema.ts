import { z } from 'zod';
import { InsurancePolicyCreateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyCreateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyCreateOrConnectWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutBeneftiPackageInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateNestedOneWithoutBeneftiPackageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => InsurancePolicyCreateWithoutBeneftiPackageInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedCreateWithoutBeneftiPackageInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            InsurancePolicyCreateOrConnectWithoutBeneftiPackageInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => InsurancePolicyWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const InsurancePolicyCreateNestedOneWithoutBeneftiPackageInputObjectSchema =
  Schema;
