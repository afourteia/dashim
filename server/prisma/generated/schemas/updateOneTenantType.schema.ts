import { z } from 'zod';
import { TenantTypeUpdateInputObjectSchema } from './objects/TenantTypeUpdateInput.schema';
import { TenantTypeUncheckedUpdateInputObjectSchema } from './objects/TenantTypeUncheckedUpdateInput.schema';
import { TenantTypeWhereUniqueInputObjectSchema } from './objects/TenantTypeWhereUniqueInput.schema';

export const TenantTypeUpdateOneSchema = z.object({
  data: z.union([
    TenantTypeUpdateInputObjectSchema,
    TenantTypeUncheckedUpdateInputObjectSchema,
  ]),
  where: TenantTypeWhereUniqueInputObjectSchema,
});
