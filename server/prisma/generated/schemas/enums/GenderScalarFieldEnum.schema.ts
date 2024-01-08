import { z } from 'zod';

export const GenderScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'arabic',
  'english',
  'name',
]);
