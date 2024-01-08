import { z } from 'zod';
import { DeviceTokenUpdateInputObjectSchema } from './objects/DeviceTokenUpdateInput.schema';
import { DeviceTokenUncheckedUpdateInputObjectSchema } from './objects/DeviceTokenUncheckedUpdateInput.schema';
import { DeviceTokenWhereUniqueInputObjectSchema } from './objects/DeviceTokenWhereUniqueInput.schema';

export const DeviceTokenUpdateOneSchema = z.object({
  data: z.union([
    DeviceTokenUpdateInputObjectSchema,
    DeviceTokenUncheckedUpdateInputObjectSchema,
  ]),
  where: DeviceTokenWhereUniqueInputObjectSchema,
});
