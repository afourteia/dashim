import { z } from 'zod';

export const SubscriberScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'institutionId',
  'insurancePolicyId',
]);
