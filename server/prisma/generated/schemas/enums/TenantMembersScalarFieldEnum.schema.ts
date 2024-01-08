import { z } from 'zod';

export const TenantMembersScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'tenantId',
  'memberId',
]);
