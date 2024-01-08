import { z } from 'zod';
import { InsurancePolicyCreateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyCreateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyUncheckedCreateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyCreateOrConnectWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutBeneftiPackageInput.schema';
import { InsurancePolicyUpsertWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUpsertWithoutBeneftiPackageInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUpdateWithoutBeneftiPackageInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutBeneftiPackageInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutBeneftiPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateOneRequiredWithoutBeneftiPackageNestedInput> =
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
      upsert: z
        .lazy(() => InsurancePolicyUpsertWithoutBeneftiPackageInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => InsurancePolicyWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => InsurancePolicyUpdateWithoutBeneftiPackageInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedUpdateWithoutBeneftiPackageInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyUpdateOneRequiredWithoutBeneftiPackageNestedInputObjectSchema =
  Schema;
