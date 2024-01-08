import { z } from 'zod';
import { DeviceTokenUpdateManyMutationInputObjectSchema } from './objects/DeviceTokenUpdateManyMutationInput.schema';
import { DeviceTokenWhereInputObjectSchema } from './objects/DeviceTokenWhereInput.schema';

export const DeviceTokenUpdateManySchema = z.object({
  data: DeviceTokenUpdateManyMutationInputObjectSchema,
  where: DeviceTokenWhereInputObjectSchema.optional(),
});
