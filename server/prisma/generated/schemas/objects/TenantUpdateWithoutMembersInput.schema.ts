import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TenantTypeUpdateOneRequiredWithoutTenantNestedInputObjectSchema } from './TenantTypeUpdateOneRequiredWithoutTenantNestedInput.schema';
import { InstitutionUpdateOneWithoutManagingTenantNestedInputObjectSchema } from './InstitutionUpdateOneWithoutManagingTenantNestedInput.schema';
import { MedicalCenterUpdateOneWithoutManagingTenantNestedInputObjectSchema } from './MedicalCenterUpdateOneWithoutManagingTenantNestedInput.schema';
import { UserUpdateOneRequiredWithoutOwnerOfNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOwnerOfNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantUpdateWithoutMembersInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isPublished: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isSoftDeleted: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    deactivationReason: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    description: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    logo: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    website: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    address: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    city: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    country: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    type: z
      .lazy(
        () => TenantTypeUpdateOneRequiredWithoutTenantNestedInputObjectSchema,
      )
      .optional(),
    assignedToInstitution: z
      .lazy(
        () => InstitutionUpdateOneWithoutManagingTenantNestedInputObjectSchema,
      )
      .optional(),
    assignedToMedicalCenter: z
      .lazy(
        () =>
          MedicalCenterUpdateOneWithoutManagingTenantNestedInputObjectSchema,
      )
      .optional(),
    owner: z
      .lazy(() => UserUpdateOneRequiredWithoutOwnerOfNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantUpdateWithoutMembersInputObjectSchema = Schema;
