import { z } from 'zod';
import { InsurancePolicyCreateWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateWithoutSubscribersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutSubscribersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutSubscribersInput.schema';
import { InsurancePolicyCreateOrConnectWithoutSubscribersInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutSubscribersInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateNestedOneWithoutSubscribersInput> =
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
      connect: z
        .lazy(() => InsurancePolicyWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const InsurancePolicyCreateNestedOneWithoutSubscribersInputObjectSchema =
  Schema;
