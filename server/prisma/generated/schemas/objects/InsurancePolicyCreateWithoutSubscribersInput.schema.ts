import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema } from './InstitutionCreateNestedOneWithoutPoliciesInput.schema';
import { BenefitPackageCreateNestedOneWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateWithoutSubscribersInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    institution: z.lazy(
      () => InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema,
    ),
    beneftiPackage: z
      .lazy(
        () =>
          BenefitPackageCreateNestedOneWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InsurancePolicyCreateWithoutSubscribersInputObjectSchema = Schema;
