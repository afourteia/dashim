import { z } from 'zod';
import { DeviceTypeUpdateInputObjectSchema } from './objects/DeviceTypeUpdateInput.schema';
import { DeviceTypeUncheckedUpdateInputObjectSchema } from './objects/DeviceTypeUncheckedUpdateInput.schema';
import { DeviceTypeWhereUniqueInputObjectSchema } from './objects/DeviceTypeWhereUniqueInput.schema';

export const DeviceTypeUpdateOneSchema = z.object({
  data: z.union([
    DeviceTypeUpdateInputObjectSchema,
    DeviceTypeUncheckedUpdateInputObjectSchema,
  ]),
  where: DeviceTypeWhereUniqueInputObjectSchema,
});
