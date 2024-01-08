import { z } from 'zod';
import { DeviceTokenCreateWithoutUserInputObjectSchema } from './DeviceTokenCreateWithoutUserInput.schema';
import { DeviceTokenUncheckedCreateWithoutUserInputObjectSchema } from './DeviceTokenUncheckedCreateWithoutUserInput.schema';
import { DeviceTokenCreateOrConnectWithoutUserInputObjectSchema } from './DeviceTokenCreateOrConnectWithoutUserInput.schema';
import { DeviceTokenCreateManyUserInputEnvelopeObjectSchema } from './DeviceTokenCreateManyUserInputEnvelope.schema';
import { DeviceTokenWhereUniqueInputObjectSchema } from './DeviceTokenWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTokenCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DeviceTokenCreateWithoutUserInputObjectSchema),
        z.lazy(() => DeviceTokenCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => DeviceTokenUncheckedCreateWithoutUserInputObjectSchema),
        z
          .lazy(() => DeviceTokenUncheckedCreateWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DeviceTokenCreateOrConnectWithoutUserInputObjectSchema),
        z
          .lazy(() => DeviceTokenCreateOrConnectWithoutUserInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DeviceTokenCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema),
        z.lazy(() => DeviceTokenWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DeviceTokenCreateNestedManyWithoutUserInputObjectSchema = Schema;
