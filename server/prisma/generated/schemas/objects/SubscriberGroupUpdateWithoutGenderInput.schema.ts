import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { SubscriberUpdateOneRequiredWithoutSubscriberGroupNestedInputObjectSchema } from './SubscriberUpdateOneRequiredWithoutSubscriberGroupNestedInput.schema';
import { RelationshipUpdateOneRequiredWithoutSubscriberGroupNestedInputObjectSchema } from './RelationshipUpdateOneRequiredWithoutSubscriberGroupNestedInput.schema';
import { FingerprintUpdateManyWithoutSubscriberGroupNestedInputObjectSchema } from './FingerprintUpdateManyWithoutSubscriberGroupNestedInput.schema';
import { IDCardUpdateManyWithoutSubscriberGroupNestedInputObjectSchema } from './IDCardUpdateManyWithoutSubscriberGroupNestedInput.schema';
import { FaceUpdateManyWithoutSubscriberGroupNestedInputObjectSchema } from './FaceUpdateManyWithoutSubscriberGroupNestedInput.schema';
import { VoiceUpdateManyWithoutSubscriberGroupNestedInputObjectSchema } from './VoiceUpdateManyWithoutSubscriberGroupNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateWithoutGenderInput> = z
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
    firstName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    secondName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    thirdName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    fourthName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    lastName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    searchName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    birthDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    nationality: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    nationalID: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    residence: z
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
    legacyCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    isFingerprintVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isIdCardVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isFaceVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    isVoiceVerificationActive: z
      .union([
        z.boolean(),
        z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    subscriber: z
      .lazy(
        () =>
          SubscriberUpdateOneRequiredWithoutSubscriberGroupNestedInputObjectSchema,
      )
      .optional(),
    relationship: z
      .lazy(
        () =>
          RelationshipUpdateOneRequiredWithoutSubscriberGroupNestedInputObjectSchema,
      )
      .optional(),
    fingerprint: z
      .lazy(
        () =>
          FingerprintUpdateManyWithoutSubscriberGroupNestedInputObjectSchema,
      )
      .optional(),
    idCard: z
      .lazy(() => IDCardUpdateManyWithoutSubscriberGroupNestedInputObjectSchema)
      .optional(),
    face: z
      .lazy(() => FaceUpdateManyWithoutSubscriberGroupNestedInputObjectSchema)
      .optional(),
    voice: z
      .lazy(() => VoiceUpdateManyWithoutSubscriberGroupNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SubscriberGroupUpdateWithoutGenderInputObjectSchema = Schema;
