import { z } from 'zod';
import { TenantTypeCreateManyInputObjectSchema } from './objects/TenantTypeCreateManyInput.schema';

export const TenantTypeCreateManySchema = z.object({
  data: z.union([
    TenantTypeCreateManyInputObjectSchema,
    z.array(TenantTypeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
