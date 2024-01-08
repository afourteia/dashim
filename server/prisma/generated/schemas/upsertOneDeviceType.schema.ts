import { z } from 'zod';
import { DeviceTypeWhereUniqueInputObjectSchema } from './objects/DeviceTypeWhereUniqueInput.schema';
import { DeviceTypeCreateInputObjectSchema } from './objects/DeviceTypeCreateInput.schema';
import { DeviceTypeUncheckedCreateInputObjectSchema } from './objects/DeviceTypeUncheckedCreateInput.schema';
import { DeviceTypeUpdateInputObjectSchema } from './objects/DeviceTypeUpdateInput.schema';
import { DeviceTypeUncheckedUpdateInputObjectSchema } from './objects/DeviceTypeUncheckedUpdateInput.schema';

export const DeviceTypeUpsertSchema = z.object({
  where: DeviceTypeWhereUniqueInputObjectSchema,
  create: z.union([
    DeviceTypeCreateInputObjectSchema,
    DeviceTypeUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DeviceTypeUpdateInputObjectSchema,
    DeviceTypeUncheckedUpdateInputObjectSchema,
  ]),
});
