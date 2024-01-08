import { z } from 'zod';
import { TenantTypeWhereUniqueInputObjectSchema } from './objects/TenantTypeWhereUniqueInput.schema';

export const TenantTypeDeleteOneSchema = z.object({
  where: TenantTypeWhereUniqueInputObjectSchema,
});
