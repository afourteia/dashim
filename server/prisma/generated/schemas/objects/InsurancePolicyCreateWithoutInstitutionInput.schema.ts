import { z } from 'zod';
import { SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './SubscriberCreateNestedManyWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateNestedOneWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateWithoutInstitutionInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    subscribers: z
      .lazy(
        () => SubscriberCreateNestedManyWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
    beneftiPackage: z
      .lazy(
        () =>
          BenefitPackageCreateNestedOneWithoutInsurancePolicyInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InsurancePolicyCreateWithoutInstitutionInputObjectSchema = Schema;
