import { z } from 'zod';
import { TenantTypeUpdateManyMutationInputObjectSchema } from './objects/TenantTypeUpdateManyMutationInput.schema';
import { TenantTypeWhereInputObjectSchema } from './objects/TenantTypeWhereInput.schema';

export const TenantTypeUpdateManySchema = z.object({
  data: TenantTypeUpdateManyMutationInputObjectSchema,
  where: TenantTypeWhereInputObjectSchema.optional(),
});
