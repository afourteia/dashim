import { z } from 'zod';
import { DeviceTokenWhereInputObjectSchema } from './objects/DeviceTokenWhereInput.schema';

export const DeviceTokenDeleteManySchema = z.object({
  where: DeviceTokenWhereInputObjectSchema.optional(),
});
