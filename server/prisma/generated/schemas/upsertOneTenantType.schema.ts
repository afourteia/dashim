import { z } from 'zod';
import { TenantTypeWhereUniqueInputObjectSchema } from './objects/TenantTypeWhereUniqueInput.schema';
import { TenantTypeCreateInputObjectSchema } from './objects/TenantTypeCreateInput.schema';
import { TenantTypeUncheckedCreateInputObjectSchema } from './objects/TenantTypeUncheckedCreateInput.schema';
import { TenantTypeUpdateInputObjectSchema } from './objects/TenantTypeUpdateInput.schema';
import { TenantTypeUncheckedUpdateInputObjectSchema } from './objects/TenantTypeUncheckedUpdateInput.schema';

export const TenantTypeUpsertSchema = z.object({
  where: TenantTypeWhereUniqueInputObjectSchema,
  create: z.union([
    TenantTypeCreateInputObjectSchema,
    TenantTypeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TenantTypeUpdateInputObjectSchema,
    TenantTypeUncheckedUpdateInputObjectSchema,
  ]),
});
