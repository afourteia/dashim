import { z } from 'zod';
import { TenantTypeWhereUniqueInputObjectSchema } from './objects/TenantTypeWhereUniqueInput.schema';

export const TenantTypeFindUniqueSchema = z.object({
  where: TenantTypeWhereUniqueInputObjectSchema,
});
