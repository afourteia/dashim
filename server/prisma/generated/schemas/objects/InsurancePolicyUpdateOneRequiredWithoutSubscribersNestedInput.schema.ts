import { z } from 'zod';
import { InsurancePolicyCreateWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateWithoutSubscribersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutSubscribersInput.schema';
import { InsurancePolicyCreateOrConnectWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutSubscribersInput.schema';
import { InsurancePolicyUpsertWithoutSubscribersInputObjectSchema } from './InsurancePolicyUpsertWithoutSubscribersInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithoutSubscribersInputObjectSchema } from './InsurancePolicyUpdateWithoutSubscribersInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutSubscribersInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutSubscribersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateOneRequiredWithoutSubscribersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => InsurancePolicyCreateWithoutSubscribersInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            InsurancePolicyCreateOrConnectWithoutSubscribersInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => InsurancePolicyUpsertWithoutSubscribersInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => InsurancePolicyWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => InsurancePolicyUpdateWithoutSubscribersInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedUpdateWithoutSubscribersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyUpdateOneRequiredWithoutSubscribersNestedInputObjectSchema =
  Schema;
