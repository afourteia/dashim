import { z } from 'zod';

export const MedicalCenterServiceTemplateScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'name',
  'dalilCode',
  'basePrice',
]);
