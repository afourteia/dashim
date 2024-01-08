import { z } from 'zod';

export const MedicalCenterServiceScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'isPublished',
  'isSoftDeleted',
  'isActive',
  'deactivationReason',
  'name',
  'medicalCenterCode',
  'basePrice',
  'medicalCenterId',
  'templateId',
]);
