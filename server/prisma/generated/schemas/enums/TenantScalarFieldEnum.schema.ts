import { z } from 'zod';

export const TenantScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'name',
  'typeId',
  'description',
  'logo',
  'website',
  'phone',
  'email',
  'address',
  'city',
  'country',
  'ownerId',
]);
