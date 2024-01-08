import { z } from 'zod';

export const TenantTypeScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'arabic',
  'english',
  'name',
]);
