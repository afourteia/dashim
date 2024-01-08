import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema } from './InstitutionCreateNestedOneWithoutPoliciesInput.schema';
import { SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateWithoutBeneftiPackageInput> =
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
      institution: z.lazy(
        () => InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema,
      ),
      subscribers: z
        .lazy(
          () =>
            SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const InsurancePolicyCreateWithoutBeneftiPackageInputObjectSchema =
  Schema;
