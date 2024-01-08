import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { InstitutionUpdateOneRequiredWithoutMembersNestedInputObjectSchema } from './InstitutionUpdateOneRequiredWithoutMembersNestedInput.schema';
import { InsurancePolicyUpdateOneRequiredWithoutSubscribersNestedInputObjectSchema } from './InsurancePolicyUpdateOneRequiredWithoutSubscribersNestedInput.schema';
import { SubscriberGroupUpdateManyWithoutSubscriberNestedInputObjectSchema } from './SubscriberGroupUpdateManyWithoutSubscriberNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateInput> = z
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
    institution: z
      .lazy(
        () => InstitutionUpdateOneRequiredWithoutMembersNestedInputObjectSchema,
      )
      .optional(),
    insurancePolicy: z
      .lazy(
        () =>
          InsurancePolicyUpdateOneRequiredWithoutSubscribersNestedInputObjectSchema,
      )
      .optional(),
    subscriberGroup: z
      .lazy(
        () => SubscriberGroupUpdateManyWithoutSubscriberNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SubscriberUpdateInputObjectSchema = Schema;
