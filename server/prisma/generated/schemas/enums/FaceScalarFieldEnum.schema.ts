import { z } from 'zod';

export const FaceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'faceHash',
  'subscriberGroupId',
]);
