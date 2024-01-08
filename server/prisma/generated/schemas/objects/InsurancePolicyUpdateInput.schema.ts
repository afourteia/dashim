import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { InstitutionUpdateOneRequiredWithoutPoliciesNestedInputObjectSchema } from './InstitutionUpdateOneRequiredWithoutPoliciesNestedInput.schema';
import { SubscriberUpdateManyWithoutInsurancePolicyNestedInputObjectSchema } from './SubscriberUpdateManyWithoutInsurancePolicyNestedInput.schema';
import { BenefitPackageUpdateOneWithoutInsurancePolicyNestedInputObjectSchema } from './BenefitPackageUpdateOneWithoutInsurancePolicyNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateInput> = z
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
    institution: z
      .lazy(
        () =>
          InstitutionUpdateOneRequiredWithoutPoliciesNestedInputObjectSchema,
      )
      .optional(),
    subscribers: z
      .lazy(
        () => SubscriberUpdateManyWithoutInsurancePolicyNestedInputObjectSchema,
      )
      .optional(),
    beneftiPackage: z
      .lazy(
        () =>
          BenefitPackageUpdateOneWithoutInsurancePolicyNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const InsurancePolicyUpdateInputObjectSchema = Schema;
