import { z } from 'zod';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithoutInstitutionInputObjectSchema } from './SubscriberUpdateWithoutInstitutionInput.schema';
import { SubscriberUncheckedUpdateWithoutInstitutionInputObjectSchema } from './SubscriberUncheckedUpdateWithoutInstitutionInput.schema';
import { SubscriberCreateWithoutInstitutionInputObjectSchema } from './SubscriberCreateWithoutInstitutionInput.schema';
import { SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema } from './SubscriberUncheckedCreateWithoutInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpsertWithWhereUniqueWithoutInstitutionInput> =
  z
    .object({
      where: z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SubscriberUpdateWithoutInstitutionInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedUpdateWithoutInstitutionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriberCreateWithoutInstitutionInputObjectSchema),
        z.lazy(
          () => SubscriberUncheckedCreateWithoutInstitutionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberUpsertWithWhereUniqueWithoutInstitutionInputObjectSchema =
  Schema;
