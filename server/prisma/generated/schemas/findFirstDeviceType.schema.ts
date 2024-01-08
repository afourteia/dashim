import { z } from 'zod';
import { DeviceTypeOrderByWithRelationInputObjectSchema } from './objects/DeviceTypeOrderByWithRelationInput.schema';
import { DeviceTypeWhereInputObjectSchema } from './objects/DeviceTypeWhereInput.schema';
import { DeviceTypeWhereUniqueInputObjectSchema } from './objects/DeviceTypeWhereUniqueInput.schema';
import { DeviceTypeScalarFieldEnumSchema } from './enums/DeviceTypeScalarFieldEnum.schema';

export const DeviceTypeFindFirstSchema = z.object({
  orderBy: z
    .union([
      DeviceTypeOrderByWithRelationInputObjectSchema,
      DeviceTypeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DeviceTypeWhereInputObjectSchema.optional(),
  cursor: DeviceTypeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DeviceTypeScalarFieldEnumSchema).optional(),
});
