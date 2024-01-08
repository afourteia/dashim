import { z } from 'zod';
import { TenantTypeOrderByWithRelationInputObjectSchema } from './objects/TenantTypeOrderByWithRelationInput.schema';
import { TenantTypeWhereInputObjectSchema } from './objects/TenantTypeWhereInput.schema';
import { TenantTypeWhereUniqueInputObjectSchema } from './objects/TenantTypeWhereUniqueInput.schema';
import { TenantTypeScalarFieldEnumSchema } from './enums/TenantTypeScalarFieldEnum.schema';

export const TenantTypeFindManySchema = z.object({
  orderBy: z
    .union([
      TenantTypeOrderByWithRelationInputObjectSchema,
      TenantTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TenantTypeWhereInputObjectSchema.optional(),
  cursor: TenantTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TenantTypeScalarFieldEnumSchema).optional(),
});
