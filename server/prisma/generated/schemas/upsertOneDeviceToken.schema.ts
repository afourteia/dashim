import { z } from 'zod';
import { DeviceTokenWhereUniqueInputObjectSchema } from './objects/DeviceTokenWhereUniqueInput.schema';
import { DeviceTokenCreateInputObjectSchema } from './objects/DeviceTokenCreateInput.schema';
import { DeviceTokenUncheckedCreateInputObjectSchema } from './objects/DeviceTokenUncheckedCreateInput.schema';
import { DeviceTokenUpdateInputObjectSchema } from './objects/DeviceTokenUpdateInput.schema';
import { DeviceTokenUncheckedUpdateInputObjectSchema } from './objects/DeviceTokenUncheckedUpdateInput.schema';

export const DeviceTokenUpsertSchema = z.object({
  where: DeviceTokenWhereUniqueInputObjectSchema,
  create: z.union([
    DeviceTokenCreateInputObjectSchema,
    DeviceTokenUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DeviceTokenUpdateInputObjectSchema,
    DeviceTokenUncheckedUpdateInputObjectSchema,
  ]),
});
