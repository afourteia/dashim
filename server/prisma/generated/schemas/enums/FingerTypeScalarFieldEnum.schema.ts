import { z } from 'zod';

export const FingerTypeScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'arabic',
  'english',
  'name',
]);
