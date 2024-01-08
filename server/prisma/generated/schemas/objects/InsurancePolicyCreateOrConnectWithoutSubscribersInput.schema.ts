import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateWithoutSubscribersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutSubscribersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateOrConnectWithoutSubscribersInput> =
  z
    .object({
      where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => InsurancePolicyCreateWithoutSubscribersInputObjectSchema),
        z.lazy(
          () =>
            InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyCreateOrConnectWithoutSubscribersInputObjectSchema =
  Schema;
