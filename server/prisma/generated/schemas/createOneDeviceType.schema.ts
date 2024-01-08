import { z } from 'zod';
import { DeviceTypeCreateInputObjectSchema } from './objects/DeviceTypeCreateInput.schema';
import { DeviceTypeUncheckedCreateInputObjectSchema } from './objects/DeviceTypeUncheckedCreateInput.schema';

export const DeviceTypeCreateOneSchema = z.object({
  data: z.union([
    DeviceTypeCreateInputObjectSchema,
    DeviceTypeUncheckedCreateInputObjectSchema,
  ]),
});
