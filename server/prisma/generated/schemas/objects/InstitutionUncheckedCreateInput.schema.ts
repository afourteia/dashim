import { z } from 'zod';
import { InstitutionCreatephoneInputObjectSchema } from './InstitutionCreatephoneInput.schema';
import { InstitutionCreateemailInputObjectSchema } from './InstitutionCreateemailInput.schema';
import { InsurancePolicyUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema } from './InsurancePolicyUncheckedCreateNestedManyWithoutInstitutionInput.schema';
import { SubscriberUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema } from './SubscriberUncheckedCreateNestedManyWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUncheckedCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    name: z.string(),
    code: z.string(),
    legacyCode: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    cityHQ: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    phone: z
      .union([
        z.lazy(() => InstitutionCreatephoneInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    email: z
      .union([
        z.lazy(() => InstitutionCreateemailInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    website: z.string(),
    facebookLink: z.string(),
    googleMapsLink: z.string(),
    twitterLink: z.string(),
    instagramLink: z.string(),
    latitude: z.number().optional().nullable(),
    longitude: z.number().optional().nullable(),
    institutionCode: z.string(),
    managingTenantId: z.string(),
    policies: z
      .lazy(
        () =>
          InsurancePolicyUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema,
      )
      .optional(),
    members: z
      .lazy(
        () =>
          SubscriberUncheckedCreateNestedManyWithoutInstitutionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InstitutionUncheckedCreateInputObjectSchema = Schema;
