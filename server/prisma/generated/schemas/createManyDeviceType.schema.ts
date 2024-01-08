import { z } from 'zod';
import { DeviceTypeCreateManyInputObjectSchema } from './objects/DeviceTypeCreateManyInput.schema';

export const DeviceTypeCreateManySchema = z.object({
  data: z.union([
    DeviceTypeCreateManyInputObjectSchema,
    z.array(DeviceTypeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
