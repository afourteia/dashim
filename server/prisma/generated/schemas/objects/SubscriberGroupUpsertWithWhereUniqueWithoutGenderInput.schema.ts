import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutGenderInputObjectSchema } from './SubscriberGroupUpdateWithoutGenderInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutGenderInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutGenderInput.schema';
import { SubscriberGroupCreateWithoutGenderInputObjectSchema } from './SubscriberGroupCreateWithoutGenderInput.schema';
import { SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutGenderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithWhereUniqueWithoutGenderInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SubscriberGroupUpdateWithoutGenderInputObjectSchema),
        z.lazy(
          () => SubscriberGroupUncheckedUpdateWithoutGenderInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutGenderInputObjectSchema),
        z.lazy(
          () => SubscriberGroupUncheckedCreateWithoutGenderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupUpsertWithWhereUniqueWithoutGenderInputObjectSchema =
  Schema;
