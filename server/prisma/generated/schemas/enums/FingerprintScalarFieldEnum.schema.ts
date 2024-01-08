import { z } from 'zod';

export const FingerprintScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'fingerTypeId',
  'fingerprintHash',
  'subscriberGroupId',
]);
