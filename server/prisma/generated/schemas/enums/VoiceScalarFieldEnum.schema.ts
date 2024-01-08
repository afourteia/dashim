import { z } from 'zod';

export const VoiceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'voiceHash',
  'subscriberGroupId',
]);
