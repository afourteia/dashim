import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutGenderInputObjectSchema } from './SubscriberGroupUpdateWithoutGenderInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutGenderInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateWithWhereUniqueWithoutGenderInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SubscriberGroupUpdateWithoutGenderInputObjectSchema),
        z.lazy(
          () => SubscriberGroupUncheckedUpdateWithoutGenderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupUpdateWithWhereUniqueWithoutGenderInputObjectSchema =
  Schema;
