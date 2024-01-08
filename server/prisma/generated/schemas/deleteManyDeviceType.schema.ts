import { z } from 'zod';
import { DeviceTypeWhereInputObjectSchema } from './objects/DeviceTypeWhereInput.schema';

export const DeviceTypeDeleteManySchema = z.object({
  where: DeviceTypeWhereInputObjectSchema.optional(),
});
