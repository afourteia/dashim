import { z } from 'zod';
import { TenantTypeCreateInputObjectSchema } from './objects/TenantTypeCreateInput.schema';
import { TenantTypeUncheckedCreateInputObjectSchema } from './objects/TenantTypeUncheckedCreateInput.schema';

export const TenantTypeCreateOneSchema = z.object({
  data: z.union([
    TenantTypeCreateInputObjectSchema,
    TenantTypeUncheckedCreateInputObjectSchema,
  ]),
});
