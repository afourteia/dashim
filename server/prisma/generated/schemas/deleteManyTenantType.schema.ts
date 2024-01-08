import { z } from 'zod';
import { TenantTypeWhereInputObjectSchema } from './objects/TenantTypeWhereInput.schema';

export const TenantTypeDeleteManySchema = z.object({
  where: TenantTypeWhereInputObjectSchema.optional(),
});
