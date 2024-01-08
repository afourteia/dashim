import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutMembersInputObjectSchema } from './InstitutionCreateNestedOneWithoutMembersInput.schema';
import { InsurancePolicyCreateNestedOneWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateNestedOneWithoutSubscribersInput.schema';
import { SubscriberGroupCreateNestedManyWithoutSubscriberInputObjectSchema } from './SubscriberGroupCreateNestedManyWithoutSubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    institution: z.lazy(
      () => InstitutionCreateNestedOneWithoutMembersInputObjectSchema,
    ),
    insurancePolicy: z.lazy(
      () => InsurancePolicyCreateNestedOneWithoutSubscribersInputObjectSchema,
    ),
    subscriberGroup: z
      .lazy(
        () => SubscriberGroupCreateNestedManyWithoutSubscriberInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SubscriberCreateInputObjectSchema = Schema;
