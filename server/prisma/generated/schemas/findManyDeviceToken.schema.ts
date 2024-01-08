import { z } from 'zod';
import { DeviceTokenOrderByWithRelationInputObjectSchema } from './objects/DeviceTokenOrderByWithRelationInput.schema';
import { DeviceTokenWhereInputObjectSchema } from './objects/DeviceTokenWhereInput.schema';
import { DeviceTokenWhereUniqueInputObjectSchema } from './objects/DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenScalarFieldEnumSchema } from './enums/DeviceTokenScalarFieldEnum.schema';

export const DeviceTokenFindManySchema = z.object({
  orderBy: z
    .union([
      DeviceTokenOrderByWithRelationInputObjectSchema,
      DeviceTokenOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTokenWhereInputObjectSchema.optional(),
  cursor: DeviceTokenWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DeviceTokenScalarFieldEnumSchema).optional(),
});
