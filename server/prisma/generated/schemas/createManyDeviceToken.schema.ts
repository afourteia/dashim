import { z } from 'zod';
import { DeviceTokenCreateManyInputObjectSchema } from './objects/DeviceTokenCreateManyInput.schema';

export const DeviceTokenCreateManySchema = z.object({
  data: z.union([
    DeviceTokenCreateManyInputObjectSchema,
    z.array(DeviceTokenCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
