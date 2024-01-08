import { z } from 'zod';
import { DeviceTokenCreateInputObjectSchema } from './objects/DeviceTokenCreateInput.schema';
import { DeviceTokenUncheckedCreateInputObjectSchema } from './objects/DeviceTokenUncheckedCreateInput.schema';

export const DeviceTokenCreateOneSchema = z.object({
  data: z.union([
    DeviceTokenCreateInputObjectSchema,
    DeviceTokenUncheckedCreateInputObjectSchema,
  ]),
});
