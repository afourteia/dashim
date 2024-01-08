import { z } from 'zod';
import { DeviceTypeUpdateManyMutationInputObjectSchema } from './objects/DeviceTypeUpdateManyMutationInput.schema';
import { DeviceTypeWhereInputObjectSchema } from './objects/DeviceTypeWhereInput.schema';

export const DeviceTypeUpdateManySchema = z.object({
  data: DeviceTypeUpdateManyMutationInputObjectSchema,
  where: DeviceTypeWhereInputObjectSchema.optional(),
});
