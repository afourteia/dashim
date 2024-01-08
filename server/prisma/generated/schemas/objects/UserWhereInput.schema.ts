import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { GenderRelationFilterObjectSchema } from './GenderRelationFilter.schema';
import { GenderWhereInputObjectSchema } from './GenderWhereInput.schema';
import { DeviceTokenListRelationFilterObjectSchema } from './DeviceTokenListRelationFilter.schema';
import { TenantListRelationFilterObjectSchema } from './TenantListRelationFilter.schema';
import { TenantMembersListRelationFilterObjectSchema } from './TenantMembersListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deactivationReason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    firstName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    secondName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    thirdName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    fourthName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lastName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    searchName: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    birthDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    genderId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nationality: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    nationalID: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    residence: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    username: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    isEmailVerificationActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    phone: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    isPhoneVerified: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    passwordHash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    avatar: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    gender: z
      .union([
        z.lazy(() => GenderRelationFilterObjectSchema),
        z.lazy(() => GenderWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    deviceToken: z
      .lazy(() => DeviceTokenListRelationFilterObjectSchema)
      .optional(),
    ownerOf: z.lazy(() => TenantListRelationFilterObjectSchema).optional(),
    memberOf: z
      .lazy(() => TenantMembersListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UserWhereInputObjectSchema = Schema;
