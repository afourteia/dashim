import { z } from 'zod';
import { BenefitPackageUncheckedCreateNestedOneWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateNestedOneWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUncheckedCreateWithoutSubscribersInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      name: z.string(),
      institutionId: z.string(),
      beneftiPackage: z
        .lazy(
          () =>
            BenefitPackageUncheckedCreateNestedOneWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema =
  Schema;
